import {Component, Input, OnInit} from '@angular/core';
import {ApiUsersService} from '../../core/api-users.service';
import {User} from '../../core/models/user.model';
import {SessionService} from '../../core/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: User;

  constructor(private profile: ApiUsersService, private session: SessionService, private route: Router) {}

  ngOnInit() {
    this.user = this.session.user;
    console.log(this.user);
  }

  logOut() {
    this.session.deleteToken();
    this.route.navigate(['auth']);
  }
}
