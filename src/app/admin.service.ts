import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private urlapi='http://localhost:8080/admin';

   getadmin(id:number):Observable<Admin>
  {
    return this.http.get<Admin>(`${this.urlapi}/${id}`);
  }

  updateadmin(id:number,adminref:Admin):Observable<object>
  {
    return this.http.put(`${this.urlapi}/${id}`,adminref);
  }

  checkadmindetail():boolean
  {
    return sessionStorage.getItem('admindata')!=null;
  }
}
