import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {tap} from 'rxjs/internal/operators';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {SessionService} from '../core/session.service';

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

  constructor(private authService: AuthService,
              private cookie: CookieService,
              private route: Router,
              private session: SessionService) { }

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
    this.errors = {};
    this.authService.logined(this.loginForm.value).pipe(
      tap((data: any) => {this.session.token(data.token); console.log(data.token); })
    ).subscribe((data: any) => console.log(data),
      (errors: any) => this.errors = errors.error);
    this.loginForm.reset();
    // if(this.cookie.get('token')) {
    //   this.route.navigate(['/advert']);
    // }
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
