import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private urlapi='http://localhost:8080/product'

  addproduct(product:Product):Observable<object>
  {
    return this.http.post(`${this.urlapi}`,product);
  }

  getallproduct():Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.urlapi}`);
  }

  getproductbyid(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.urlapi}/${id}`);
  }

  deletebyid(id:number):Observable<object>
  {
    return this.http.delete(`${this.urlapi}/${id}`);
  }

  updateproduct(id:number,product:Product):Observable<object>
  {
    return this.http.put(`${this.urlapi}/${id}`,product);
  }
}
