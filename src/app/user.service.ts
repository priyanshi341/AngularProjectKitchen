import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private urlapi='http://localhost:8080/user'

  adduser(user:User):Observable<object>
  {
    return this.http.post(`${this.urlapi}`,user);
  }

  getallusers():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.urlapi}`);
  }

  getuserbyid(id:number):Observable<User>
  {
    return this.http.get<User>(`${this.urlapi}/${id}`);
  }

  deleteuserbyid(id:number):Observable<object>
  {
    return this.http.delete(`${this.urlapi}/${id}`);
  }

  updateuser(id:number,user:User):Observable<object>
  {
    return this.http.put(`${this.urlapi}/${id}`,user);
  }
  checkuserdetail():boolean
  {
    return sessionStorage.getItem('userdata')!=null;
  }
}
