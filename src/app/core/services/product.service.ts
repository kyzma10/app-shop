import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/internal/operators';
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
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result;
        }));
  }

  public addAdvert(res: any) {
    const body: any = {
      theme: 'new',
      currency: '1'
    };
    return this.http.post(Urls.advert, body);
  }
}
