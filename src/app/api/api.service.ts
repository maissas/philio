import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Membre} from "../models/membre";


const baseUrl = '/.netlify/functions/api/members';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    var req = this.http.get<Membre[]>(baseUrl);
    return req
  }

  /*getImgProfile(image){
    return this.http.get(`${baseUrl}/imgProfile/${image}`);
  }*/

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    //let headers = new HttpHeaders({'Content-Type': 'application/json' });
    //let options = { headers: headers };

    var req = this.http.post<Membre>(
      baseUrl,
      data
    );
    return req
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    console.log("delete")
    console.log(`${baseUrl}/${id}`)
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}


