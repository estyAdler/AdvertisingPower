import { Component, OnInit } from '@angular/core';
import { BuilderService } from 'src/app/services/builder.service';

@Component({
  selector: 'app-new-bulidings',
  templateUrl: './new-bulidings.component.html',
  styleUrls: ['./new-bulidings.component.css']
})
export class NewBulidingsComponent implements OnInit {
  displayedColumnsbuild: string[] = ['name', 'first_phone', 'second_phone', 'email', 'street', 'Building_number', 'city', 'Number_tenants', 'status'];
  dataSource = [];


  constructor(private builderService: BuilderService) { }

  ngOnInit(): void {
    this.builderService.getNewBuildings().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      this.dataSource = res;
      console.log("posters", this.dataSource);

    })
  }
  treat(i) {
    console.log(i, document.getElementById(`s${i}`).style.backgroundColor == "blue")
    if (document.getElementById(`s${i}`).style.backgroundColor == "blue") {
      document.getElementById(`s${i}`).style.backgroundColor = "red";
      this.dataSource[i].status = 'לא טופל'
      console.log(this.dataSource[i])
      this.builderService.changeStatus(this.dataSource[i]).subscribe(res => {
        console.log("sucses1");
        err => {
          console.log("error :( !!!!!!!!");
        }
      })
      console.log("blue")
    }
    else {
      document.getElementById(`s${i}`).style.backgroundColor = "blue";
      console.log(this.dataSource[i])
      this.dataSource[i].status = 'טופל'
      this.builderService.changeStatus(this.dataSource[i]).subscribe(res => {
        console.log("sucses1");
        err => {
          console.log("error :( !!!!!!!!");
        }
      })
      console.log("red")
    }
  }

}
