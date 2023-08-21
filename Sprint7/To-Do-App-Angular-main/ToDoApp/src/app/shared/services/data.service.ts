import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:4000/'
  private currUser!: User
  private currTodos!: Todo[]

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User []> {
    return this.http.get<User []>(this.apiUrl+'users')
  }

  getUser(): Observable<Todo []> {
    return this.http.get<Todo []>(this.apiUrl+'todos', this.getHeaders())
  }

  addTodo(todo: string) {
    return this.http.post<any>(this.apiUrl+'todos', {"task": todo}, this.getHeaders())
  }

  editTodo(id: number) {
    return this.http.put<any>(this.apiUrl+'todos/'+id, {}, this.getHeaders())
  }

  deleteTodo(id: number) {
    return this.http.delete<any>(this.apiUrl+'todos/'+id, this.getHeaders())
  }

  getHeaders() {
    let token = localStorage.getItem('token') || ''
    return {headers: new HttpHeaders().set('Authorization', token)}
  }

  setToken(username:string, password:string) {
    let credentials = btoa(`${username}:${password}`)
    localStorage.setItem('token', `Basic ${credentials}`)
  }

  setUserData(user: User, todos: Todo[]) {
    this.currUser = user
    this.currTodos = todos
  }

  getUserData() {
    let token = localStorage.getItem('token')
    return {token, user: this.currUser, todos: this.currTodos}
  }

  logoutUser() {
    localStorage.removeItem('token')
  }

  isLogin() {
    let token = localStorage.getItem('token')
    if(token) return true
    else return false
  }
}
