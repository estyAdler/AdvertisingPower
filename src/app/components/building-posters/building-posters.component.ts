import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostersService } from 'src/app/services/posters.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BuildingPosterService } from 'src/app/services/building-poster.service';
import { Building_Poster } from 'src/app/models/building_poster.model';
import { Router } from '@angular/router';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-building-posters',
  templateUrl: './building-posters.component.html',
  styleUrls: ['./building-posters.component.css']
})
export class BuildingPostersComponent implements OnInit {
  selectedFile: ImageSnippet;
  buildingPosterForm;
  constructor(private router: Router, private http: HttpClient, private posterservice: BuildingPosterService) { }

  ngOnInit(): void {
    this.buildingPosterForm = new FormGroup({
      impor: new FormControl(''),
    });
  }
  send() {
    const p = new Building_Poster();
    p.buildingId = parseInt(localStorage.getItem("b_ID"));
    p.link = this.selectedFile.src;
    p.poster_name = this.selectedFile.file.name;
    p.type = 0;
    p.impor = this.buildingPosterForm.controls.impor.value;
    this.posterservice.addPoster(p).subscribe(
      (res) => {
        this.router.navigate(['/'])
        this.onSuccess();
      },
      (err) => {
        this.onError();
      })
  }
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    console.log(this.selectedFile)
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      console.log(this.selectedFile)
    });

    reader.readAsDataURL(file);
  }
}

