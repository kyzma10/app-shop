import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signForm: FormGroup;
  errors: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
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

  onSubmitSign() {
    // console.log(this.signForm);
    this.errors = {};
    this.authService.register(this.signForm.value).
    subscribe((data: any) => this.authService.verifyEmail(data.token),
      (errors: any) => this.errors = errors.error);
    this.signForm.reset();
  }

}
