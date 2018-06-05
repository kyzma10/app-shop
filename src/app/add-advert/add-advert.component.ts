import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.scss']
})
export class AddAdvertComponent implements OnInit {
  // model = {};
  // text = new FormControl();
  addAdvertForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addAdvertForm = new FormGroup({
      theme: new FormControl('', Validators.required),
      text: new FormControl(),
      price: new FormControl(),
      currency: new FormControl('1', [Validators.required, this.checkValueValidator]),
      contract_price: new FormControl(),
      location: new FormControl(),
      control: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.addAdvertForm);
  }

  checkValueValidator(control: FormControl): {error: string} {
    if (control.value != 1) {
      return { error: 'not right value'}
    }
    return null;
  }
}
