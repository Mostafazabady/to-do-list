import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})

export class TodoInputComponent {
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }
}
