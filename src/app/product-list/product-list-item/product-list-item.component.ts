import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  currentSlide: number = 0;
  advert: any;

  slides: Array<any> = [
    // {path: '../../../assets/img/item-1.png', status: true},
    // {path: '../../../assets/img/item-2.png', status: false},
    // {path: '../../../assets/img/item-3.png', status: false}
  ];

  constructor(activate: ActivatedRoute) {
    this.advert = activate.data.pipe((data: any) => data.value.advert);
  }

  ngOnInit() {
    // console.log(this.advert);
    if (this.advert.images && this.advert.images.length > 0) {
      for (let i = 0; i < this.advert.images.length; i++){
        if(i === 0) {
          this.slides.push({path: this.advert.images[i].file, status: true })
        } else this.slides.push({path: this.advert.images[i].file, status: false});
      }
    }
  }

  handleClick(): void {
    let currentItem = (this.currentSlide + 1) % this.slides.length;
    for(let i = 0; i < this.slides.length; i++) {
      if(i === currentItem) {
        this.slides[i].status = true;
      } else this.slides[i].status = false;
    }
    this.currentSlide++;
  }

}
