import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {tap} from 'rxjs/internal/operators';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  signForm: FormGroup;
  statusLogin = false;
  errors: any;

  constructor(private authService: AuthService, private cookie: CookieService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
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
    this.errors = {};
    this.authService.logined(this.loginForm.value).pipe(
      tap((data: any) => {this.cookie.set('token', data.token)})
    ).subscribe((data: any) => {console.log(data)},
      (errors: any) => this.errors = errors.error);
    this.loginForm.reset();
    // if(this.cookie.get('token')) {
    //   this.route.navigate(['/advert']);
    // }
  }

  onSubmitSign() {
    // console.log(this.signForm);
    this.errors = {};
    this.authService.register(this.signForm.value).subscribe(data => console.log(data),
      (errors: any) => this.errors = errors.error);
    this.signForm.reset();
  }
}
