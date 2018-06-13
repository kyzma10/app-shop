import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionService} from './session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private session: SessionService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.session.token;
    console.log(authHeader);
    if (authHeader) {
      const authReq = req.clone({headers: req.headers.set('Authorization', `JWT ${authHeader}`)});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
