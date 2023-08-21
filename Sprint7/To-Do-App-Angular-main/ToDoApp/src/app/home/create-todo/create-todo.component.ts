import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  newName: string = '';

  constructor(public dialogRef: MatDialogRef<CreateTodoComponent>) {}

  onSave(): void {
    this.dialogRef.close(this.newName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
