import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
private apiUrl = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

signUp(data:any){
 
  
return this.http.post(this.apiUrl + '/api/register',data);

}


}
