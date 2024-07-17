import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: string[] = JSON.parse(localStorage.getItem('todos') || '[]');

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.updateLocalStorage();
  }

  clearTodos() {
    this.todos = [];
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
