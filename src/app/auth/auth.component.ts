import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {tap} from 'rxjs/internal/operators';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {SessionService} from '../core/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit{
  statusLogin = true;

  constructor(private authService: AuthService,
              private cookie: CookieService,
              private route: Router,
              private session: SessionService) { }

  ngOnInit() {




  }

  changeStatusLogin(): void {
    this.statusLogin = true;
  }

  changeStatusSign(): void {
    this.statusLogin = false;
  }

}
