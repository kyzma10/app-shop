import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signForm: FormGroup;
  errors: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const re = new RegExp([
      '^((([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900',
      '-\uFDCF\uFDF0-\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}',
      '~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)',
      '*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]',
      '|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\\\([\x01-\x09\x0b\x0c\x0d-\x7f]',
      '|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)',
      '?(\x22)))@((([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\\',
      'd|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0',
      '-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF',
      '\uFDF0-\uFFEF])))\\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])',
      '|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0',
      '-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$'
    ].join(''));

    this.signForm = new FormGroup({
      username: new FormControl('', [this.checkIsEmpty]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(re)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),

    }, { validators: this.checkMatchPassword });
  }

  onSubmitSign() {
    this.errors = {};

    this.authService.register(this.signForm.value).
    subscribe((data: any) => this.authService.verifyEmail(data.token),
      (errors: any) => this.errors = errors.error);

    this.signForm.reset();
  }

  private checkMatchPassword(fg: FormGroup) {

    if(fg.get('password').value !== fg.get('confirm_password').value) {
      fg.get('confirm_password').setErrors({matchPassword: true})
    }

    return null;
  }

  checkIsEmpty(control: AbstractControl) {
    let value = control.value.trim();
    if(value === undefined || value === '') {
      return { isEmpty: true }
    }

    return null;
  }

}
