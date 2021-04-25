import { Component, OnInit, Output } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl, Validators, FormGroup, AbstractControl, FormBuilder, NgControl, ControlValueAccessor } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { BuilderService } from 'src/app/services/builder.service';
import { BusinessService } from 'src/app/services/business.service';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from 'src/app/app.component';

import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  hide = true;
  @Output() changeStatus = new EventEmitter<{ status: number }>();

  constructor(private myService: UsersService, private builderService: BuilderService
    , private businessService: BusinessService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      idUser: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  checkUser() {
    if (this.loginForm.valid) {
      const u = new User()
      u.user_name = this.loginForm.controls.idUser.value;
      u.password = this.loginForm.controls.password.value;
      this.myService.login(u).subscribe(res => {
        if (res == undefined) {
          alert("מצטערים שם זה אינו רשום במערכת." + "</br> " + "ניתן להכנס כמשתמש חדש")
          this.onChangeStatus(0);
        }
        else {
          localStorage.setItem("userId", stringify(res.ID));
          localStorage.setItem("status", stringify(res.status));
          if (res.status == 1) {
            this.onChangeStatus(1);
          }
          if (res.status == 2) {
            this.builderService.login(res).subscribe(resb => {
              localStorage.setItem("b_ID", stringify(resb.ID));
              err => {
                console.log("error :( !!!!!!!!", err);
              }
            })
            this.onChangeStatus(2);
          }
          if (res.status == 3) {
            this.businessService.login(res).subscribe(resb => {
              localStorage.setItem("b_ID", stringify(resb.ID));
              err => {
                console.log("error :( !!!!!!!!", err);
              }
            })
            this.onChangeStatus(3);
          }
          err => {
            console.log("error :( !!!!!!!!", err);
          }
        }
      })

    }

  }
  onChangeStatus(s) {
    this.changeStatus.emit({
      status: s
    });
  }
}

