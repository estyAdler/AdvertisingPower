
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Business } from '../models/business.model';
import { Business_Poster } from '../models/business_poster.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/business";
  constructor(private http: HttpClient) { }
  getBusiness(user: User): Observable<Business> {
    let u = this.http.post<Business>(`${this.basicURL}/getBusiness`, user, this.option);
    return u;
  }
  signUpBussines(business: Business): Observable<any> {
    console.log("2-business");
    let u = this.http.post<any>(`${this.basicURL}/signUp`, business, this.option);
    console.log("7-u", u);
    return u;
  }
  login(userId: User): Observable<Business> {
    console.log("2-business");
    let u = this.http.post<Business>(`${this.basicURL}/login`, userId, this.option);
    console.log("7-u", u);
    return u;
  }
  getBusinessName(businessId: Business_Poster): Observable<Business> {
    let u = this.http.post<Business>(`${this.basicURL}/getBusinessName`, businessId, this.option);
    console.log("7-u", u);
    return u;
  }
  getAllUsers(): Observable<Business[]> {
    let u = this.http.post<Business[]>(`${this.basicURL}/getAllUsers`, this.option);
    console.log("7-u", u);
    return u;
  }
}
