import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl = 'http://localhost:8000/api/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch a list of users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Fetch user details by ID
  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }
}
