import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [ 
  
  { path: 'admin/users', component: UserManagementComponent },
  { path: 'admin/products', component: ProductManagementComponent },
  
  {path:'nav',component:NavComponentComponent},
  {path:'login',component:LoginComponent},
  {path:'orders',component:OrdersComponent},
  {path:'',component:HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
