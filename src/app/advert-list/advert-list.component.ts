import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { ProductModel } from "../core/models/product.model";

@Component({
  selector: 'product-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
  public products: ProductModel[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res: ProductModel[]) => {
      this.products = res;
    });
  }

  public loadMore() {
    this.loading = true;
    this.productService.getProductsMore().subscribe((res: ProductModel[]) => {
      res.forEach(item => this.products.push(item));
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.products = [];
  }
}
