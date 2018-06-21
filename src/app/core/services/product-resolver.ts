import {Resolve} from '../models/resolve.model';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/index';
import {ProductModel} from '../models/product.model';
import {HttpClient} from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService) {}
  resolve() {
    return this.productService.getProducts();
  }
}
