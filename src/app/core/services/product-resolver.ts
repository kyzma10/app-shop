import {Resolve} from '../models/resolve.model';
import {Injectable} from '@angular/core';
import {ProductService} from './product.service';

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService) {}
  resolve() {
    return this.productService.getProducts();
  }
}
