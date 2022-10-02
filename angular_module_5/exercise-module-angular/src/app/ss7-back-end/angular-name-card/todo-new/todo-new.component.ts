import { Component, OnInit } from '@angular/core';
import {Todo} from "../module/todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();
  id: number;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe( r => {
        this.getAll();
      });
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(r => {
      this.getAll();
    });
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

}
