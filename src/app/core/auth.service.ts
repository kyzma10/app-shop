import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignModel} from '../models/sign.model';
import {LoginModel} from '../models/login.model';
import {SessionService} from './session.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private session: SessionService) {}

  register(sign: SignModel) {
    const body = {
      email: sign.email,
      password1: sign.password,
      password2: sign.confirm_password
    };
    return this.http.post('http://light-it-04.tk/api/registration/', body);
  }

  logined(login: LoginModel) {
    const body = {
      email: login.email,
      password: login.password
    };
    return this.http.post('http://light-it-04.tk/api/login/', body);
  }

  loginGoogle(token) {
    const body = {
      access_token: token
    };
    return this.http.post('http://light-it-04.tk/api/rest-auth/google/', body);
  }

  isLoged(): boolean {
    if (this.session.token) {
      return true;
    }

    return false;
  }

  verifyEmail(key: any) {
    if (key === null) {
      return false;
    }
    return this.http.post('http://light-it-04.tk/api/verify-email/', {key: key});
  }
}
