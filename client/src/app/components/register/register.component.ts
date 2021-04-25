import { Component, OnInit, Optional, Self, ElementRef, Input, ViewChild, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, FormBuilder, NgControl, ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { MatFormFieldControl } from '@angular/material/form-field';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { BusinessService } from 'src/app/services/business.service';
import { BuilderService } from 'src/app/services/builder.service';
import { Business } from 'src/app/models/business.model';
import { Builder } from 'src/app/models/Builder.model';
import { stringify } from 'querystring';
import { CategoryService } from 'src/app/services/category.service';
import { PostersService } from 'src/app/services/posters.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  color = 'primary';
  hide = true;
  message: string;
  categoriesList: string[] = [];
  cityList = [];
  @Output() changeStatus = new EventEmitter<{ status: number }>();
  constructor(private userservice: UsersService, private businessservice: BusinessService,
    private builderservice: BuilderService, private posterservice: PostersService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      console.log("sucses1");
      err => {
        console.log("error :( !!!!!!!!");
      }
      console.log("category", this.categoriesList);
      res.forEach(element => {
        this.categoriesList.push(element.categoryName)
        console.log("category", element.categoryName);
      });
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
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      verifyPassword: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      category: new FormControl('some'),
      businessName: new FormControl('', Validators.required),
      businessOwnerName: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]{0,}$')]),
      secondtel: new FormControl('', Validators.minLength(9)),
      email: new FormControl('', [Validators.required, Validators.email]),
      buildingName: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{0,}$')]),
      city: new FormControl('', Validators.required),
      Numlodgers: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{0,}$')]),
      allTrue: new FormControl('', Validators.requiredTrue)
    })

  }
  checkUser() {
    if (this.registerForm.controls.password.value != this.registerForm.controls.verifyPassword.value) {
      this.message = "הסיסמאות אינן תואמות";
      this.registerForm.controls.verifyPassword.reset();
    }
    if (this.registerForm.controls.username.valid &&
      this.registerForm.controls.password.valid && this.registerForm.controls.verifyPassword.valid
      && this.registerForm.controls.email.valid && this.registerForm.controls.tel.valid
      && this.registerForm.controls.allTrue.valid) {
      const u = new User()
      u.user_name = this.registerForm.controls.username.value;
      u.password = this.registerForm.controls.password.value;
      this.userservice.login(u).subscribe(res => {
        console.log("login in register", res);
        if (res == undefined) {

          if (this.registerForm.controls.status.value == 'bussiness') {
            localStorage.setItem("status", "3");
            u.status = 3;
            const b = new Business();
            b.businessName = this.registerForm.controls.businessName.value;
            b.businessOwnerName = this.registerForm.controls.businessOwnerName.value;
            b.email = this.registerForm.controls.email.value;
            b.first_phone = this.registerForm.controls.tel.value;
            b.second_phone = this.registerForm.controls.secondtel.value;
            b.category = this.registerForm.controls.category.value;
            console.log("1-1-business:", b);
            if (this.registerForm.controls.businessName.valid) {
              this.userservice.register(u).subscribe(res => {
                b.userID = res.insertId;
                console.log("1-business:", b);
                this.businessservice.signUpBussines(b).subscribe(res => {
                  localStorage.setItem("b_ID", stringify(res.insertId));
                  console.log("res", res)
                  err => {
                    console.log("error :( !!!!!!!!");
                  }
                });
                err => {
                  console.log("error :( !!!!!!!!");
                }
              });
              this.onChangeStatus(3);
            }
          }
          else {
            localStorage.setItem("status", "2");
            u.status = 2;
            const b = new Builder();
            b.email = this.registerForm.controls.email.value;
            b.first_phone = this.registerForm.controls.tel.value;
            b.second_phone = this.registerForm.controls.secondtel.value;
            b.name = this.registerForm.controls.buildingName.value;
            b.street = this.registerForm.controls.street.value;
            b.Building_number = this.registerForm.controls.number.value;
            b.city = this.registerForm.controls.city.value;
            b.Number_tenants = this.registerForm.controls.Numlodgers.value;
            b.status = "לא טופל";
            if (this.registerForm.controls.street.valid && this.registerForm.controls.buildingName.valid &&
              this.registerForm.controls.number.valid &&
              this.registerForm.controls.city.valid && this.registerForm.controls.Numlodgers.valid) {
              this.userservice.register(u).subscribe(res => {
                b.userID = res.insertId;
                console.log(res.insertId)
                this.builderservice.signUpBuilder(b).subscribe(resb => {
                  localStorage.setItem("b_ID", resb.insertId);
                  err => {
                    console.log("error :( !!!!!!!!");
                  }
                });
                err => {
                  console.log("error :( !!!!!!!!");
                }
              });
              this.onChangeStatus(2);
            }
          }
          this.registerForm.reset();
        }
        else {
          this.message = "משתמש זה קיים במערכת"
        }
        err => {
          console.log("error :( !!!!!!!!");
        }
      })
    }
  }


  getErrorMessage() {
    if (this.registerForm.controls['email'].hasError('required')) {
      return '';
    }

    return this.registerForm.controls['email'].hasError('email') ? 'אמייל לא חוקי' : '';
  }
  onChangeStatus(s) {
    this.changeStatus.emit({
      status: s
    });
  }
}
