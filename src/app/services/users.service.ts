import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/user";
  constructor(private http: HttpClient) { }
  login(user: User): Observable<User> {
    let u = this.http.post<User>(`${this.basicURL}/login`, user, this.option);
    console.log("logiinuser", u);
    return u;
  }
  register(user: User): Observable<any> {
    let u = this.http.post<any>(`${this.basicURL}/register`, user, this.option);
    console.log("in userservice", u);
    return u;
  }
}
