import { Component, OnInit } from '@angular/core';
import { PostersService } from 'src/app/services/posters.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-size-posters',
  templateUrl: './size-posters.component.html',
  styleUrls: ['./size-posters.component.css']
})
export class SizePostersComponent implements OnInit {
  status = parseInt(localStorage.getItem('status'));
  displayedColumns: string[] = ['id', 'size', 'price'];
  displayedColumnsNew: string[] = ['id', 'size', 'price', 'newPrice'];
  dataSource = [];
  sizeForm;
  constructor(private myService: PostersService, private router: Router) { }

  ngOnInit(): void {
    this.sizeForm = new FormGroup({
      newPrice1: new FormControl(''),
      newPrice2: new FormControl(''),
      newPrice3: new FormControl(''),
      newPrice0: new FormControl(''),
    })
    this.myService.getSizePosters().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.dataSource = res;

      console.log("posters", this.dataSource);
      this.dataSource.forEach(element => {
        this.sizeForm.controls[`newPrice${element.ID - 1}`].value = element.price;
        console.log("posters", element.ID);
      });
    })
  }
  sendData() {
    this.dataSource.forEach(element => {
      element.price = this.sizeForm.controls[`newPrice${element.ID - 1}`].value;
      this.myService.changePrice(element).subscribe(res => {
        err => {
          console.log("error :( !!!!!!!!");
        }
      });
    });

  }
}
