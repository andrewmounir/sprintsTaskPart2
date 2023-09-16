import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor() {}

  getAllProducts(): Promise<any> {
    return fetch(this.apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        throw new Error('Fetch error: ' + error.message);
      });
  }
}

