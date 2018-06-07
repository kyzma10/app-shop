import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  signForm: FormGroup;
  statusLogin = false;
  constructor(private authService: AuthService) { }

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
        Validators.minLength(8)]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)])
    });
  }

  changeStatusLogin(): void {
    this.statusLogin = true;
  }

  changeStatusSign(): void {
    this.statusLogin = false;
  }

  onSubmitLogin() {
    // console.log(this.loginForm);
    this.authService.logined(this.loginForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    // this.loginForm.reset();
  }

  onSubmitSign() {
    // console.log(this.signForm);
    this.authService.register(this.signForm.value).subscribe(data => console.log(data),
      error => console.log(error));
    // this.signForm.reset();
  }
}
