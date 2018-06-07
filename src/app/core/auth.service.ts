import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SignModel} from '../models/sign.model';
import {LoginModel} from '../models/login.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(sign: SignModel) {
    const body = { email: sign.email,
      password1: sign.password,
      password2: sign.confirm_password};
    return this.http.post('http://light-it-04.tk/api/registration/', body);
  }

  logined(login: LoginModel) {
    const body = { email: login.email, password: login.password}
    return this.http.post('http://light-it-04.tk/api/login/', body);
  }
}
