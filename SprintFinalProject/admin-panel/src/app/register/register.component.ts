import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  address:string='';
phone:string='';









  constructor(private service: SignupService) {}

  onSubmit() {
    // Prepare the data to send to the RESTful API
    const userData = {
      name: this.fullName,
      email: this.email,
      phone: this.phone,
      address:this.address,
      password:this.password
   
    };


    this.service.signUp(userData).subscribe(
      (response) => {
        console.log(userData+'hi');
        
        console.log(response);
      },
      (error) => {
        console.error(error);
        console.log(userData+'failed');

      }
    );



    

  }
}