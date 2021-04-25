import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Building_Poster } from '../models/building_poster.model';
@Injectable({
  providedIn: 'root'
})
export class BuildingPosterService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/buildingPoster";
  constructor(private http: HttpClient) { }
  addPoster(poster: Building_Poster): Observable<any> {
    console.log("2-poster");
    let u = this.http.post<any>(`${this.basicURL}/addNewPoster`, poster, this.option);
    console.log("7-u", u);
    return u;
  }

  uploadImage(image, src): Observable<FormData> {
    const formData: FormData = new FormData();
    formData.append('image', image)
    formData.append('src', src);
    console.log("img", image)
    console.log("src", typeof (src))
    console.log("fdata", formData.get('image'))
    return this.http.post<FormData>(`${this.basicURL}/addNewPoster`, formData, this.option);
  }
}
