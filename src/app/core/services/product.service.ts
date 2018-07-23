import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, delay, map, tap} from 'rxjs/internal/operators';
import { ProductModel } from "../models/product.model";
import {ResponseModel} from "../models/response.model";
import {Urls} from '../urls';
import {Observable} from 'rxjs/Rx';
import {errorComparator} from 'tslint/lib/verify/lintError';

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
          return result }),
        catchError(this.handleError('getProducts')))
  }

  public getProduct(id) {
    return this.http.get(`${Urls.advert}/${id}`)
      .pipe(catchError(this.handleError('get product')))
  }

  public getProductsMore() {
    return this.http.get(`${Urls.advert}?limit=${this.limitMore}`)
      .pipe(
        delay(5000),
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result
        }),
        catchError(this.handleError('get more products')));
  }

  public addAdvert(res: any) {
    return this.http.post(Urls.advert, res);
  }

  public addImage(advert_pk: any, res: any) {
    return this.http.post(`${Urls.advert}/${advert_pk}/image/`, res);
  }

  private handleError<T> (operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      throw new Error(`${operation} failed: ${message}`);
    };

  }
}
