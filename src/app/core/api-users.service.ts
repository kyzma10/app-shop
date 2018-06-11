import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ApiUsersService {
  profile$: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  constructor() {}

  get userSubject() {
    return this.profile$.asObservable();
  }
}
