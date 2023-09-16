import { CustomersService } from './../customers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users: any[] = [];

  constructor(private CustomersService:CustomersService) {}

  ngOnInit(): void {
    // Fetch a list of users when the component initializes
    this.CustomersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
        // Call your service method to delete the user
        this.CustomersService.deleteUser(userId).subscribe(() => {
            // Remove the deleted user from the local list
            this.users = this.users.filter((user) => user.id !== userId);
        });
    }
}
}
