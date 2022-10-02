import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../module/todo";


@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("  http://localhost:3000/todos");
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>("  http://localhost:3000/todos/"+id);
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>("  http://localhost:3000/todos", todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>("  http://localhost:3000/todos/"+ id, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>("  http://localhost:3000/todos/"+id);
  }
}
