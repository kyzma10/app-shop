import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ApiUsersService} from '../../core/api-users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private profile: ApiUsersService) {}

  ngOnInit() {
    // this.profile.userSubject();
  }

  logOut() {
    // this.cookie.delete('token');
  }
}
