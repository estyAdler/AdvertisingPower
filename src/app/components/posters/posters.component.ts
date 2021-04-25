import { Component, OnInit } from '@angular/core';
import { PostersService } from 'src/app/services/posters.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Business_Poster } from 'src/app/models/business_poster.model';
import { Cities_poster } from 'src/app/models/cities_poster.model';
import { Business } from 'src/app/models/business.model';
import { Router } from '@angular/router';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})


export class PostersComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private posterservice: PostersService, private router: Router) { }
  posterName: string;
  src: string;
  posterForm;
  step = 0;
  new = false;
  old = false;
  sizeList: string[] = [];
  cityList: string[] = [];
  oldPosters = [];
  ngOnInit(): void {
    this.posterservice.getSizePosters().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      console.log("category", this.sizeList);
      res.forEach(element => {
        this.sizeList.push(element.size)
        console.log("category", element.size);
      });
    })
    const b = new Business();
    b.ID = parseInt(localStorage.getItem("b_ID"));
    this.posterservice.getPostersByBusinessID(b).subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.oldPosters = res;
    })


    this.posterservice.getAllCities().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      res.forEach(element => {
        this.cityList.push(element.city)
      });
    })

    this.posterForm = new FormGroup({
      nation: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      num_week: new FormControl('1', Validators.required),
      link: new FormControl('', /* Validators.required */),
      language: new FormControl('hebrew')
    })
  }
  newf() {
    this.new = true;
    this.old = false;
  }
  oldf() {
    this.new = false;
    this.old = true;
  }
  selctOldPoster(i) {
    this.src = this.oldPosters[i].link;
    this.posterName = this.oldPosters[i].poster_name;
    console.log(this.posterForm.valid ? "y" : "n")
  }
  sendData() {
    this.step++;
    if (this.posterForm.valid) {
      const p = new Business_Poster();
      p.businessId = parseInt(localStorage.getItem("b_ID"));
      p.link = this.src;
      p.nation = this.posterForm.controls.nation.value;
      p.num_week = this.posterForm.controls.num_week.value;
      p.poster_name = this.posterName;
      p.size = this.posterForm.controls.size.value;
      console.log("p.size", p.size)
      switch (p.size) {
        case "שמינית עמוד": {
          console.log("1");
          p.rrow = 1;
          p.col = 1;
          break;
        }
        case "רבע עמוד": {
          console.log("2");
          p.rrow = 2;
          p.col = 1;
          break;
        }
        case "חצי עמוד": {
          p.rrow = p.col = 2;
          break;
        }
        case "עמוד שלם": {
          p.rrow = 2;
          p.col = 4;
          break;
        }
        default: {
          break;
        }
      }
      p.language = this.posterForm.controls.language.value;
      if (this.selectedFile != null) {
        p.link = this.selectedFile.src;
        p.poster_name = this.selectedFile.file.name;
      }
      this.posterservice.addNewPoster(p).subscribe(res => {
        console.log(res, "1")
        debugger;
        if (res) {
          this.posterForm.controls.city.value.forEach(element => {
            const cp = new Cities_poster();
            cp.city = element;
            cp.id_poster = res.insertId;
            console.log(res.insertId, "2")
            this.posterservice.insertCitiesPosters(cp).subscribe(res => {
              console.log(res)
              err => {
                console.log("error :( !!!!!!!!");
              }
            });
            console.log("element", element)
          });
        }
        if (this.selectedFile != null)
          this.onSuccess()
        this.router.navigate(['/'])
        err => {
          this.onError()
          console.log("error :( !!!!!!!!");
        }

      });

    }

  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
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
