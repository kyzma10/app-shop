import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable()
export class UserService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
  }

  changeUserData(data: any) {
    return this.http.patch('http://light-it-04.tk/api/profile/', data);
  }
}
