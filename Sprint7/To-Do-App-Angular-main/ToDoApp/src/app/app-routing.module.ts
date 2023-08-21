import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './home/list-users/list-users.component';
import { ListTodosComponent } from './home/list-todos/list-todos.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'todos', component: ListTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
