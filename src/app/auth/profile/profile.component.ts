import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      avatar: new FormControl(),
      color_scheme: new FormControl(),
      email: new FormControl(),
      first_name: new FormControl(),
      language: new FormControl(),
      last_name: new FormControl(),
      location: new FormControl(),
      username: new FormControl()
    });
  }

  handleSubmit() {
    console.log(this.profileForm.value);
    this.userService.changeUserData(this.profileForm.value).subscribe();
  }

}
