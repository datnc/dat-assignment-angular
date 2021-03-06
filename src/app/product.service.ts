import { Injectable } from '@angular/core';
import { Product } from "./Product";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  api="https://5e7ef5607a92ed001655feab.mockapi.io/products";
  constructor(
    private http : HttpClient
  ) { }
  getProducts():Observable<Product[]>{
return this.http.get<Product[]>(this.api);
}
  getProduct(id) : Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  addProduct(product):Observable<Product>{
return this.http.post<Product>(`${this.api}`,product);
  }
  updateProduct(product): Observable<Product>{
return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
  deleteProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}