import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/internal/operators';
import { ProductModel } from "../models/product.model";
import {ResponseModel} from "../models/response.model";

@Injectable()
export class ProductService {
  private limit: number = 16;

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get(`http://light-it-04.tk/api/adverts?limit=${this.limit}`)
      .pipe(
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result;
        }));
  }

  public getProduct(id) {
    return this.http.get(`http://light-it-04.tk/api/adverts/${id}`).pipe(
      tap((response: any) => console.log(response))
    );
  }
}
