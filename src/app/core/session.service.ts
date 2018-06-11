import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class SessionService {

  constructor(private cookie: CookieService) {}
  get token() {
    return this.cookie.get('token');
  }
  set token(value: any) {
    console.log('session-service', value);
    // this.cookie.set('token', value);
  }

  get user() {
    return JSON.stringify(localStorage.getItem('user'));
  }

  set user(value: string) {
    localStorage.setItem('user', value);
  }
}
