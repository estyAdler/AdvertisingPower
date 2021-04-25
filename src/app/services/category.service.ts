
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Business } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/category";
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    let c = this.http.post<Category[]>(`${this.basicURL}/getAllCategories`, this.option);
    console.log("before", c);
    return c;
  }
  getCategoryName(categoryId: Business): Observable<Category> {
    console.log("category", categoryId)
    let c = this.http.post<Category>(`${this.basicURL}/getCategoryName`, categoryId, this.option);
    console.log("before", c);
    return c;
  }
}

