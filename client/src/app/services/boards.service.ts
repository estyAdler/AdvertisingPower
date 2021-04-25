
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Builder } from '../models/Builder.model';
import { Business_Poster } from '../models/business_poster.model';
import { BuildingPostersComponent } from '../components/building-posters/building-posters.component';
import { Building_Poster } from '../models/building_poster.model';
import { Board_poster } from '../models/board_poster.model';
@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  basicURL: string = "http://localhost:3020/boards";
  constructor(private http: HttpClient) { }
  getPosters(building: Builder): Observable<Business_Poster[]> {
    let u = this.http.post<Business_Poster[]>(`${this.basicURL}/getPosters`, building, this.option);
    return u;
  }
  getBuilderPosters(building: Builder): Observable<Building_Poster[]> {
    let u = this.http.post<Building_Poster[]>(`${this.basicURL}/getBuilderPosters`, building, this.option);
    return u;
  }
  insertPosterToBoard(bp: Board_poster): Observable<any> {
    let u = this.http.post<any>(`${this.basicURL}/insertPosterToBoard`, bp, this.option);
    return u;
  }
  getBoardByBID(bID: Builder): Observable<Board_poster[]> {
    let u = this.http.post<Board_poster[]>(`${this.basicURL}/getBoardByBID`, bID, this.option);
    return u;
  }
}

