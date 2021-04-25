import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Home_Poster } from '../models/home_poster.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DesignService {

  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/designer";
  constructor(private http: HttpClient) { }

  addPoster(poster: Home_Poster): Observable<any> {
    console.log("2-poster");
    let u = this.http.post<any>(`${this.basicURL}/addNewPoster`, poster, this.option);
    console.log("7-u", u);
    return u;
  }
  getPosters(): Observable<Home_Poster[]> {
    console.log("2-poster");
    let u = this.http.post<Home_Poster[]>(`${this.basicURL}/getPosters`, this.option);
    console.log("7-u", u);
    return u;
  }
}
