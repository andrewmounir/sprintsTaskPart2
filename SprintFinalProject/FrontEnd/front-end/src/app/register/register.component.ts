import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(private service: SignupService  , private snackBar: MatSnackBar) {}

  onSubmit() {
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

        this.snackBar.open('registerd success please login now', 'Dismiss', {
          duration: 3000, 
          horizontalPosition: 'center', 
          verticalPosition: 'top', 
        });
      },

     
      (error) => {
        console.error(error);
        console.log(userData+'failed');

      }
    );



    

  }
}