import { AppComponent } from './../app.component';
import { SignInService } from './../sign-in.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
 




  constructor(private service: SignInService , private router: Router , private appComponent: AppComponent) {}

  onSubmit() {
    // Prepare the data to send to the RESTful API
    const userData = {
      email: this.email,
      password:this.password
   
    };


    this.service.signIn(userData).subscribe(
      (response) => {
        // this.service.storeToken(response.token);
        console.log(userData+'hi');
        // this.router.navigate(['/']);
        this.appComponent.isAuthenticated=true
        console.log(response);
      },
      (error) => {
        console.error(error);
        console.log(userData+'failed');

      }
    );


    

  }
}
