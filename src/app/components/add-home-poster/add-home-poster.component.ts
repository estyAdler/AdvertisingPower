import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { DesignService } from 'src/app/services/design.service';
import { Home_Poster } from '../../models/home_poster.model'

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-add-home-poster',
  templateUrl: './add-home-poster.component.html',
  styleUrls: ['./add-home-poster.component.css']
})

export class AddHomePosterComponent implements OnInit {

  selectedFile: ImageSnippet;
  homePosterForm;
  constructor(private HttpClient: HttpClient, private designService: DesignService) { }

  ngOnInit(): void {
    this.homePosterForm = new FormGroup({
    });
  }
  send() {
    const p = new Home_Poster()
    p.link = this.selectedFile.src;
    this.designService.addPoster(p).subscribe(
      (res) => {
        this.onSuccess();
      },
      (err) => {
        this.onError();
      })
  }
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
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
    });

    reader.readAsDataURL(file);
  }

}
