import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ApiUsersService} from '../../core/api-users.service';
import {User} from '../../models/user.model';
import {SessionService} from '../../core/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: User;

  constructor(private profile: ApiUsersService, private session: SessionService) {}

  ngOnInit() {
    this.user = this.session.user;
    console.log(this.user);
  }

  logOut() {
    // this.cookie.delete('token');
  }
}
