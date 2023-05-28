import { IProduct } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  
  getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }

  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  
  addPRoduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products', product)
  }

  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }

  removeProduct(id: number) : Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
}
