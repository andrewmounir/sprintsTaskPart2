import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private apiUrl = 'http://localhost:8000'
  private tokenKey = 'token';
  constructor(private http: HttpClient) { }
  

signIn(data:any){
 
  return this.http.post(this.apiUrl + '/api/login',data);
  
}

storeToken(token: string) {
  localStorage.setItem(this.tokenKey, token);
}
getToken(): string | null {
  return localStorage.getItem(this.tokenKey);
}
removeToken() {
  localStorage.removeItem(this.tokenKey);
  

}
isAuthenticated(): boolean {
  const token = this.getToken();
  return !!token; // Double exclamation to convert to a boolean
}

}
