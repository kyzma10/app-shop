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
    let res: any = {};
    const val: any = this.profileForm.value;
    for (let item in val) {
      if (val[item] !== null) {
        res[item] = val[item];
      }
    }

    this.userService.changeUserData(res).subscribe();
  }

  handleChange(e) {
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);
      reader.onloadend = () => {
        this.userService.changeUserData({avatar: reader.result}).subscribe();
      };
    }
  }

}
