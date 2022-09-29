import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-login-form',
  templateUrl: './angular-login-form.component.html',
  styleUrls: ['./angular-login-form.component.css']
})
export class AngularLoginFormComponent implements OnInit {

  constructor() { }

  get email() {
    return this.logIn.get('email');
  }

  get password() {
    return this.logIn.get('password');
  }

  logIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(6)),
  });

  ngOnInit(): void {
  }

}
