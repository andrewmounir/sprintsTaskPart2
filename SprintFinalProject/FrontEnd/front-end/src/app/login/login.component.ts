import { SignInService } from './../sign-in.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
 




  constructor(private service: SignInService , private router: Router ,  private snackBar: MatSnackBar) {}

  onSubmit() {
   
    const userData = {
      email: this.email,
      password:this.password
   
    };


    this.service.signIn(userData).subscribe(
      (response) => {
        console.log(userData+'hi');
        this.router.navigate(['/products']);
        console.log(response);
        this.snackBar.open('Login success thank you', 'Dismiss', {
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
