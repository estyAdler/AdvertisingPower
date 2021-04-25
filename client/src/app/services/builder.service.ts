



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Business } from '../models/business.model';
import { Builder } from '../models/Builder.model';
import { Building_Categories } from '../models/building_categories.model';
import { Building_Monthly_Statement } from '../models/building_monthly_statement.model';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/building";
  constructor(private http: HttpClient) { }
  signUpBuilder(building: Builder): Observable<any> {
    return  this.http.post<any>(`${this.basicURL}/signUp`, building, this.option);
  }
  addData(building: Builder): Observable<any> {
    return this.http.post<any>(`${this.basicURL}/addData`, building, this.option);
  }
  insertBuildingCategory(bc: Building_Categories): Observable<any> {
    return this.http.post<any>(`${this.basicURL}/insertBuildingCategory`, bc, this.option);
  }
  login(userId: User): Observable<Builder> {
    return this.http.post<Builder>(`${this.basicURL}/login`, userId, this.option);
  }
  monthlyStatement(bm: Building_Monthly_Statement): Observable<any> {
    return this.http.post<any>(`${this.basicURL}/monthlyStatement`, bm, this.option);
  }
  getAllUsers(): Observable<Builder[]> {
    return this.http.post<Builder[]>(`${this.basicURL}/getAllUsers`, this.option);
  }
  getNewBuildings(): Observable<Builder[]> {
    return this.http.post<Builder[]>(`${this.basicURL}/getNewBuildings`, this.option);
  }
  changeStatus(b: Builder): Observable<Builder> {
    return this.http.post<Builder>(`${this.basicURL}/changeStatus`, b, this.option);
  }
  updateNumWeekOrder(b: Builder): Observable<any> {
    return this.http.post<any>(`${this.basicURL}/updateNumWeekOrder`, b, this.option);
  }
}