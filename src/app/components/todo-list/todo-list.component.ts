import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todos: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
    this.todos = this.todoService.getTodos();
  }

  clearTodos() {
    if (confirm('Are you sure you want to clear all to-do items?')) {
      this.todoService.clearTodos();
      this.todos = [];
    }
  }
}
