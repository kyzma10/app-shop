import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './advert-list-item.component.html',
  styleUrls: ['./advert-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  currentSlide: number = 0;
  advert: any;

  slides: Array<any> = [];

  constructor(activate: ActivatedRoute) {
    this.advert = activate.data.pipe((data: any) => data.value.advert);
  }

  ngOnInit() {
    if (this.advert.images && this.advert.images.length > 0) {
      for (let i = 0; i < this.advert.images.length; i++){
        if(i === 0) {
          this.slides.push({path: this.advert.images[i].file, status: true })
        } else this.slides.push({path: this.advert.images[i].file, status: false});
      }
    } else this.slides.push({path: '/assets/img/no_image.png', status: true })
  }

  handleClick(): void {
    let currentItem = (this.currentSlide + 1) % this.slides.length;
    for(let i = 0; i < this.slides.length; i++) {
      if (i === currentItem) {
        this.slides[i].status = true;
      } else this.slides[i].status = false;
    }
    this.currentSlide++;
  }

}
