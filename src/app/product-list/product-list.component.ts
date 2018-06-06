import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from "../models/product.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
  public products: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res: ProductModel[]) => {
      this.products = res;
    });
  }

  public loadMore() {
    this.productService.getProducts().subscribe((res: ProductModel[]) => {
      res.forEach(item => this.products.push(item));
    });
  }

  ngOnDestroy() {
    this.products = [];
  }
}
