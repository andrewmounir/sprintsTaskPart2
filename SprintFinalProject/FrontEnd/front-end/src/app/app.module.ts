import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClientXsrfModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TruncatePipe } from './truncate.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponentComponent,
    HomeComponent,
    ProductListingComponent,
   CartComponent,
    UserPageComponent,
    TruncatePipe,
    CartComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN', // Name of the cookie to read the token from
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
