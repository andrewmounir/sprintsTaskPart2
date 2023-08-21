import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { DataService } from 'src/app/shared/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from '../create-todo/create-todo.component';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  userData: any
  load = false
  listData!: Todo[]

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userData = this.dataService.getUserData()
    if (this.userData.todos) {
      this.load = true
      this.listData = this.userData.todos
    }
  }

  deleteTask(itemID: number) {
    this.dataService.deleteTodo(itemID).subscribe(res => {
     this.listData = this.listData.filter(it => it.id !== itemID);
    }, err => alert('Process failed, please try again'));
  }

  toggle(item: any): void {
    item.completed = !item.completed; 
    this.dataService.editTodo(item.id).subscribe(res => {}, 
      err => alert('Process failed, please try again'));
  }

  openDialog(): void {
    const dialog = this.dialog.open(CreateTodoComponent, {width: '400px'});
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.addTodo(result).subscribe(res => this.addToLocal(result), 
          err => alert('Process failed, please try again'));
      }
    });
  }

  addToLocal(task: string) {
    let id = Math.max(...this.listData.map(it => it.id)) + 1;
    let todo = {id, user_id: this.userData.user.id, task: task, completed: false}
    this.listData.push(todo)
  }
}

