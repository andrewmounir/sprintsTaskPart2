
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.baseUrl}/getProducts`);
  }

  // getProductById(id: number) {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  addProduct(product: FormData) {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: FormData) {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}