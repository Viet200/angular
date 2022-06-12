import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductAdd } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
    getProducts():Observable<Product[]> {
     return this.http.get<Product[]>(environment.products)
    }
    getProduct(id:string):Observable<Product>{
      return this.http.get<Product>(`${environment.products}/${id}`);
    }
    deleteProduct(id:String|Number):Observable<any>{
      return this.http.delete(`${environment.products}/${id}`)
    }
    addProducts(data: ProductAdd):Observable<Product> {
      return this.http.post<Product>(`${environment.products}`, data)
    }
    updateProduct(_id: string | number, data: ProductAdd):Observable<Product>{
      return this.http.put<Product>(`${environment.products}/${_id}`, data)
    }
}
