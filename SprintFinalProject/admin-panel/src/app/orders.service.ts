// order.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiUrl = 'http://localhost:8000'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Retrieve a list of orders from the API
  getOrders(): Observable<any[]> {
    const url = `${this.apiUrl}/api/orders`; // Replace 'api/orders' with your actual endpoint
    return this.http.get<any[]>(url);
  }

  // Retrieve a specific order by ID from the API
  getOrderById(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/api/orders/${orderId}`; // Replace 'api/orders' with your actual endpoint
    return this.http.get<any>(url);
  }

  // Update an existing order in the API
  updateOrder(orderId: number, updatedOrder: any): Observable<any> {
    const url = `${this.apiUrl}/api/orders/${orderId}`; // Replace 'api/orders' with your actual endpoint
    return this.http.put<any>(url, updatedOrder);
  }

  // Add a new order to the API
  addOrder(newOrder: any): Observable<any> {
    const url = `${this.apiUrl}/api/orders`; // Replace 'api/orders' with your actual endpoint
    return this.http.post<any>(url, newOrder);
  }

  // Delete an order by ID from the API
  deleteOrder(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/api/orders/${orderId}`; // Replace 'api/orders' with your actual endpoint
    return this.http.delete<any>(url);
  }
}
