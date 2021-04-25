import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cs = { status: 0 };
  clickLogin = false;
  clickRegister = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cs.status = parseInt(localStorage.getItem("status"));
  }
  logout() {
    localStorage.clear();
    this.cs.status = 0
  }
  send() {
  }
  onStatusChange(data) {
    this.cs = data;
    this.clickLogin = false;
    this.clickRegister = false;
    //  alert("status" + " " + this.cs.status)
  }
}
