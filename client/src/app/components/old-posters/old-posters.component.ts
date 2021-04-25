import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business.model';
import { PostersService } from 'src/app/services/posters.service';

@Component({
  selector: 'app-old-posters',
  templateUrl: './old-posters.component.html',
  styleUrls: ['./old-posters.component.css']
})
export class OldPostersComponent implements OnInit {
  oldPosters = [];
  message: string;
  constructor(private posterservice: PostersService) { }

  ngOnInit(): void {
    const b = new Business();
    b.ID = parseInt(localStorage.getItem("b_ID"));
    this.posterservice.getPostersByBusinessID(b).subscribe(res => {
      console.log("sucses1",res);
      err => {
        console.log("error :( !!!!!!!!");
      }
      if (res == null) {
        this.message = "אין לך מודעות במערכת!!"
      }
      this.oldPosters = res;
      this.oldPosters.forEach(element => {
        switch (element.size) {
          case 1:
            element.size="שמינית עמוד"
            break;
          case 2:
            element.size="רבע עמוד"
            break;
          case 3:
            element.size="חצי עמוד"
            break;
          default:
            element.size="עמוד שלם"
            break;
        }
      });
    })

  

  }
  changeSize(index) {
    var x = document.getElementsByClassName("example-card");
    var i;
    for (i = 0; i < x.length-1; i++) {
      x[i].setAttribute('background-color','red')
    }
    if (document.getElementById(`card${index}`).style.width === ''||document.getElementById(`card${index}`).style.width ==='120%')
      document.getElementById(`card${index}`).style.width = '200%';
    else
      document.getElementById(`card${index}`).style.width = '120%'
    console.log(i)
  }
}
