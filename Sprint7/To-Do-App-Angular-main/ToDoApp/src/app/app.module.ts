import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './home/list-users/list-users.component';
import { ListTodosComponent } from './home/list-todos/list-todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateTodoComponent } from './home/create-todo/create-todo.component';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListTodosComponent,
    CreateTodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
