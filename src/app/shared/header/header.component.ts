import {Component, Input} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input() user;
  constructor(private cookie: CookieService) {
    console.log(this.user)
  }

  logOut() {
    this.cookie.delete('token');
  }
}
