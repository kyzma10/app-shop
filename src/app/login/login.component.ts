import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  signForm: FormGroup;
  statusLogin: boolean = false;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });

    this.signForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)])
    });
  }

  changeStatusLogin(): void {
    this.statusLogin = true;
  }

  changeStatusSign(): void {
    this.statusLogin = false;
  }

  onSubmitLogin() {
    console.log(this.loginForm);
    this.loginForm.reset();
  }

  onSubmitSign() {
    console.log(this.signForm);
    this.signForm.reset();
  }
}
