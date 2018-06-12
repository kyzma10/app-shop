import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor() { }

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

  uploadImg(e) {
    console.log(e);
  }

  handleSubmit() {
    console.log(this.profileForm.value);
  }

}
