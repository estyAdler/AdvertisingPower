import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuilderService } from 'src/app/services/builder.service';
import { Builder } from 'src/app/models/Builder.model';
import { CategoryService } from 'src/app/services/category.service';
import { Building_Categories } from 'src/app/models/building_categories.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-data',
  templateUrl: './build-data.component.html',
  styleUrls: ['./build-data.component.css']
})
export class BuildDataComponent implements OnInit {
  buildForm;
  step = 0;
  categoriesList: string[] = [];
  constructor(private buildingService: BuilderService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      err => {
        console.log("error :( !!!!!!!!");
      }

      console.log("category", this.categoriesList);
      res.forEach(element => {
        this.categoriesList.push(element.categoryName)
        console.log("category", element.categoryName);
      });
    })
    this.buildForm = new FormGroup({
      nation: new FormControl('', Validators.required),
      a25: new FormControl('', Validators.required),
      a25_40: new FormControl('', Validators.required),
      a40_60: new FormControl('', Validators.required),
      a60: new FormControl('', Validators.required),
      language: new FormControl('hebrew'),
      category: new FormControl('some', Validators.required),
      numberposters: new FormControl('', Validators.required),
    })


  }
  sendData() {
    this.step++;
    if (this.buildForm.valid) {
      const b = new Builder();
      b.userID = parseInt(localStorage.getItem("userId"));
      b.a25 = this.buildForm.controls.a25.value;
      b.a25_40 = this.buildForm.controls.a25_40.value;
      b.a40_60 = this.buildForm.controls.a40_60.value;
      b.a60 = this.buildForm.controls.a60.value;
      b.language = this.buildForm.controls.language.value;
      b.nation = this.buildForm.controls.nation.value;
      console.log("building", b)
      this.buildingService.addData(b).subscribe(res => {
        err => {
          console.log("error :( !!!!!!!!");
        }
      });
      console.log("fotus", this.buildForm.controls.category.value);
      this.buildForm.controls.category.value.forEach(element => {
        const bc = new Building_Categories();
        bc.category = element;
        bc.buildingId = parseInt(localStorage.getItem("b_ID"));
        this.buildingService.insertBuildingCategory(bc).subscribe(res => {
          this.router.navigate(['/'])
          err => {
            console.log("error :( !!!!!!!!");
          }
        });
        console.log("element", element)
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
}


