import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, tap} from 'rxjs/internal/operators';
import { ProductModel } from "../models/product.model";
import {ResponseModel} from "../models/response.model";
import {Urls} from '../urls';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {
  private limit: number = 16;
  private limitMore: number = 4;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(`${Urls.advert}?limit=${this.limit}`)
      .pipe(
        delay(5000),
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result;
        }))
  }

  public getProduct(id) {
    return this.http.get(`${Urls.advert}/${id}`)
      .pipe(
      tap((response: any) => console.log(response))
    );
  }

  public getProductsMore() {
    return this.http.get(`${Urls.advert}?limit=${this.limitMore}`)
      .pipe(
        delay(5000),
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result;
        }));
  }

  public addAdvert(res: any) {
    return this.http.post(Urls.advert, res);
  }

  public addImage(advert_pk: any, res: any) {
    return this.http.post(`${Urls.advert}/${advert_pk}/image/`, res);
  }
}
