import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-listing/product-listing.component'; // Replace with the actual path to your Product interface file
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8000/api/getProducts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }


  getProductById(id: number): Observable<Product> {
    const url = `${'http://localhost:8000/api/products'}/${id}`;
    return this.http.get<Product>(url);
  }
}
