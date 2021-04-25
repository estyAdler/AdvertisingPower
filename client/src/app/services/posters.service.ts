import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business_Poster } from '../models/business_poster.model';
import { Size_Poster } from '../models/size_poster.model';
import { Cities_poster } from '../models/cities_poster.model';
import { City } from '../models/city.model';
import { Business } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class PostersService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/posters";
  constructor(private http: HttpClient) { }
  getWaitPosters(): Observable<Business_Poster[]> {
    return this.http.post<Business_Poster[]>(`${this.basicURL}/getWaitPosters`, this.option);
  }
  getSizePosters(): Observable<Size_Poster[]> {
    let u = this.http.post<Size_Poster[]>(`${this.basicURL}/getSizePosters`, this.option);
    return u;
  }
  /* uploadImage(image, src): Observable<FormData> {
    const formData: FormData = new FormData();
    formData.append('image', image)
    formData.append('src', src);
    console.log("img", image)
    console.log("src", typeof (src))
    console.log("fdata", formData.get('image'))
    return this.http.post<FormData>(`${this.basicURL}/addPoster`, formData, this.option);
  } */
  insertCitiesPosters(cp: Cities_poster): Observable<any> {
    debugger;
    console.log("cp-business", cp);
    let u = this.http.post<any>(`${this.basicURL}/insertCitiesPosters`, cp, this.option);
    console.log("7-u", u);
    return u;
  }
  getAllCities(): Observable<City[]> {
    console.log("2-business");
    let u = this.http.post<City[]>(`${this.basicURL}/getAllCities`, this.option);
    console.log("7-u", u);
    return u;
  }
  addNewPoster(poster: Business_Poster): Observable<any> {
    console.log("poster", poster);
    let u = this.http.post<any>(`${this.basicURL}/addNewPoster`, poster, this.option);
    console.log("7-u", u);
    return u;
  }
  updateStatus(poster: Business_Poster): Observable<any> {
    console.log("poster           ", poster);
    let u = this.http.post<any>(`${this.basicURL}/updateStatus`, poster, this.option);
    console.log("7-u", u);
    return u;
  }
  getPostersByBusinessID(businessId: Business): Observable<Business_Poster[]> {
    console.log(businessId)
    return this.http.post<Business_Poster[]>(`${this.basicURL}/getPostersByBusinessID`, businessId, this.option);
  }
  changePrice(sizePoster: Size_Poster): Observable<any> {
    console.log(sizePoster)
    let u = this.http.post<Size_Poster>(`${this.basicURL}/changePrice`, sizePoster, this.option);

    return u;
  }
  decreaseWeek(): Observable<any> {
    let u = this.http.post<any>(`${this.basicURL}/decreaseWeek`, this.option);
    return u;
  }
}
