import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; 

  ngOnInit(): void {
    
    this.cartItems = [
      { productName: 'Product 1', price: 10, quantity: 2, total: 20 },
      { productName: 'Product 2', price: 15, quantity: 1, total: 15 },
    ];
  }
}
