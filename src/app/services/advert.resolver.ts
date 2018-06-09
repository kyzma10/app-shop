import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable()
export class AdvertResolver implements Resolve<any> {
  constructor(private productService: ProductService) {}

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.productService.getProduct(router.params.id);
  }
}
