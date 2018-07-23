import {environment} from '../../environments/environment';

export class Urls {
  static regester = `${environment.apiBase}/registration/`;
  static login = `${environment.apiBase}/login/`;
  static loginToGoogle = `${environment.apiBase}/rest-auth/google/`;
  static verifyEmail = `${environment.apiBase}/verify-email/`;
  static tokenVerify = `${environment.apiBase}/token-verify/`;
  static editProfile = `${environment.apiBase}/profile/`;

  static advert = `${environment.apiBase}/adverts/`;
}
