
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';// Import your order service here
@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = []; // Define the array to hold orders

  constructor(private OrdersService: OrdersService ) {} // Inject the order service

  ngOnInit(): void {
    // Load orders when the component initializes
    this.loadOrders();
  }

  loadOrders(): void {
    // Use the order service to retrieve orders
    this.OrdersService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  editOrder(order: any): void {
    // Handle editing the selected order
    // Redirect to an edit page or open a modal, etc.
  }
}
