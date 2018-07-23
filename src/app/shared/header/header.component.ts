import {Component, Input, OnInit} from '@angular/core';
import {ApiUsersService} from '../../core/api-users.service';
import {User} from '../../core/models/user.model';
import {SessionService} from '../../core/session.service';
import {Router} from '@angular/router';
import {UserService} from '../../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: User;

  constructor(private profile: ApiUsersService,
              private session: SessionService,
              private userService: UserService,
              private route: Router) {}

  ngOnInit() {
    this.user = this.profile.profile$.value;

    if (!this.user) {
      let token = this.userService.tokenVerify(this.session.token);
      if (token) {
        this.userService.readUserData().subscribe((user: User) => this.user = user);
      }
    }
  }

  logOut() {
    this.session.deleteToken();
    this.route.navigate(['auth']);
  }
}
