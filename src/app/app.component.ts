import { Component, Input } from '@angular/core';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-example';
  constructor() { }

  ngOnInit() {
  }
}
