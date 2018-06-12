import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class SessionService {

  constructor(private cookie: CookieService) {}

  get token() {
    return this.cookie.get('token');
  }
  set token(value: any) {
    this.cookie.set('token', value);
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  set user(value: any) {
    localStorage.setItem('user', JSON.stringify(value));
  }
}
