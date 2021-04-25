import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BuilderService } from 'src/app/services/builder.service';
import { Building_Monthly_Statement } from 'src/app/models/building_monthly_statement.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-month',
  templateUrl: './build-month.component.html',
  styleUrls: ['./build-month.component.css']
})
export class BuildMonthComponent implements OnInit {
  buildingMonthForm
  constructor(private buildingService: BuilderService, private router: Router) { }

  ngOnInit(): void {
    this.buildingMonthForm = new FormGroup({
      numPosters: new FormControl(''),
      satisfaction: new FormControl(''),
      text: new FormControl('')

    })
  }
  send() {
    const bm = new Building_Monthly_Statement();
    bm.buildingId = parseInt(localStorage.getItem("b_ID"));
    bm.month = new Date().toLocaleDateString();
    bm.num_posters = this.buildingMonthForm.controls.numPosters.value;
    bm.satisfaction = this.buildingMonthForm.controls.satisfaction.value;
    this.buildingService.monthlyStatement(bm).subscribe(res => {
      this.router.navigate(['/'])
      err => {
        console.log("error :( !!!!!!!!");
      }
    });
  }
}
