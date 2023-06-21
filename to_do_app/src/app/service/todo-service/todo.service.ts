import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/to-do-lists/to-do-lists.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  public getAllTodo() {
    return this.httpClient.get<Todo[]>('http://localhost:8080/api/TodoController');

  }

  deleteById(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/TodoController/${id}`);
  }

  getById(id: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/api/TodoController/${id}`)
  }
}
