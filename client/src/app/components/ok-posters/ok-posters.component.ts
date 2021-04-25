import { Component, OnInit, ElementRef } from '@angular/core';
import { PostersService } from 'src/app/services/posters.service';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-ok-posters',
  templateUrl: './ok-posters.component.html',
  styleUrls: ['./ok-posters.component.css']
})
export class OkPostersComponent implements OnInit {
  posters = [];
  constructor(private elRef: ElementRef, private posterService: PostersService, private businessService: BusinessService, private router: Router) { }

  ngOnInit(): void {
    this.posterService.getWaitPosters().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.posters = res;

      console.log("posters", this.posters);
      this.posters.forEach(element => {
        console.log("posters", element.businessId);
        this.businessService.getBusinessName(element).subscribe(res => {
          console.log(res)
          element.businessId = res.businessName
          console.log(element.businessId)
          err => {
            console.log("error :( !!!!!!!!");
          }
        });
      });
    })
  }
  ok(i) {
    console.log("I IS :", i, this.posters[i].status, document.getElementById(`type${i}`));
    this.posters[i].status = 1;
    console.log(this.posters[i].status);
    document.getElementById(`type${i}`).style.backgroundImage = "url('../../../assets/business/1.svg')";
  }
  not(i) {
    console.log("I IS :", i, this.posters[i].status);
    this.posters[i].status = -1;
    document.getElementById(`type${i}`).style.backgroundImage = "url('../../../assets/business/2.svg')";
  }
  sendemail() {
    this.posters.forEach(element => {
      if (element.status != 0) {
        this.posterService.updateStatus(element).subscribe(res => {
          console.log(res)
          this.router.navigate(['/'])
          err => {
            console.log("error :( !!!!!!!!");
          }
        })
      }
    })

  }
}
