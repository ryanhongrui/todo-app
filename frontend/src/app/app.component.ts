import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  todos: string[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo).subscribe(() => {
        this.newTodo = '';
        this.loadTodos();
      });
    }
  }

  deleteTodo(todo: string) {
    this.todoService.deleteTodo(todo).subscribe(() => this.loadTodos());
  }
}
