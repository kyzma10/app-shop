import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from "../models/product.model";

@Component({
  selector: 'product-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
  public products: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res: ProductModel[]) => {
      this.products = res;
      console.log(this.products);
    });
  }

  public loadMore() {
    this.productService.getProductsMore().subscribe((res: ProductModel[]) => {
      res.forEach(item => this.products.push(item));
    });
  }

  ngOnDestroy() {
    this.products = [];
  }
}
