import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.scss']
})
export class AddAdvertComponent implements OnInit {
  addAdvertForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.addAdvertForm = new FormGroup({
      theme: new FormControl('', Validators.required),
      text: new FormControl(),
      price: new FormControl(),
      currency: new FormControl('1', this.checkValueValidator),
      contract_price: new FormControl(),
      location: new FormControl(),
      control: new FormControl()
    });
  }

  onSubmit() {
    let result: any = {};
    const val: any = this.addAdvertForm.value;

    for(let item in val) {
      if (val[item] !== null) {
        result[item] = val[item];
      }
    }

    this.productService.addAdvert(result).subscribe((response: any)=> console.log(response), (error: any) => console.log(error));
    // console.log(result);
    // console.log(this.addAdvertForm.value);
    this.addAdvertForm.reset();
  }

  private checkValueValidator (control: FormControl): {error: string} {
    if (control.value != 1) {
      return { error: 'not right value'}
    }
    return null;
  }
}
