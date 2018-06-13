import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/internal/operators';
import {AuthService} from '../../core/auth.service';
import {SessionService} from '../../core/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any;

  constructor(private authService: AuthService, private session: SessionService, private route: Router) { }

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
  }

  onSubmitLogin() {
    this.errors = {};
    this.authService.logined(this.loginForm.value)
      .pipe(
      tap((data: any) => this.session.token = data.token)
    ).subscribe((data: any) => {
      this.session.user = data.user;
      this.route.navigate(['']);
      },
      (errors: any) => this.errors = errors.error);
    this.loginForm.reset();
    // if(this.cookie.get('token')) {
    //   this.route.navigate(['/advert']);
    // }
  }

}
