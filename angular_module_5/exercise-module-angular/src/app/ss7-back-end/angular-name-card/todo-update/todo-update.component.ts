import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  todoForm: FormGroup;
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {
    this.todoForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.todoService.findById(this.id).subscribe(todo => {
        this.todoForm = new FormGroup({
          id: new FormControl(),
          content: new FormControl(),
          complete: new FormControl()
        });
        this.todoForm.patchValue(todo);
        console.log(todo);
      });
    });
  }

  edit(id) {
    const todo = this.todoForm.value;
    this.todoService.update(id, todo).subscribe();
  }

}
