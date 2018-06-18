import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Urls} from './urls';

@Injectable()
export class UserService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
  }

  changeUserData(data: any) {
    return this.http.patch(Urls.editProfile, data);
  }
}
