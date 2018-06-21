import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignModel} from './models/sign.model';
import {LoginModel} from './models/login.model';
import {SessionService} from './session.service';
import {Urls} from './urls';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private session: SessionService) {}

  register(sign: SignModel) {
    const body = {
      email: sign.email,
      password1: sign.password,
      password2: sign.confirm_password
    };
    return this.http.post(Urls.regester, body);
  }

  logined(login: LoginModel) {
    const body = {
      email: login.email,
      password: login.password
    };
    return this.http.post(Urls.login, body);
  }

  loginGoogle(token) {
    const body = {
      access_token: token
    };
    return this.http.post(Urls.loginToGoogle, body);
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
    return this.http.post(Urls.verifyEmail, {key: key});
  }
}
