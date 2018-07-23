import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/internal/operators';
import {AuthService} from '../../core/auth.service';
import {SessionService} from '../../core/session.service';
import {Router} from '@angular/router';
import {ApiUsersService} from '../../core/api-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any;

  constructor(private authService: AuthService,
              private apiUser: ApiUsersService,
              private session: SessionService,
              private route: Router) { }

  ngOnInit() {
    const re = new RegExp([
      '^((([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900',
      '-\uFDCF\uFDF0-\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}',
      '~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)',
      '*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]',
      '|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\\\([\x01-\x09\x0b\x0c\x0d-\x7f]',
      '|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)',
      '?(\x22)))@((([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\\',
      'd|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0',
      '-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF',
      '\uFDF0-\uFFEF])))\\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])',
      '|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0',
      '-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$'
    ].join(''));

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(re)
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
      this.apiUser.profile$.next(data.user);
      this.route.navigate(['']);
      },
      (errors: any) => this.errors = errors.error);
    this.loginForm.reset();
  }

}
