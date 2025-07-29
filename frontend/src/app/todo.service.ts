import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:5000/api/todo';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }

  addTodo(todo: string): Observable<any> {
    return this.http.post(this.baseUrl, { task: todo });
  }

  deleteTodo(todo: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + encodeURIComponent(todo));
  }
}
