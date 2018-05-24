import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { ProductModel } from "../models/product.model";
import {ResponseModel} from "../models/response.model";

@Injectable()
export class ProductService {
  private limit: number = 4;
  constructor(private http: HttpClient) {}

  public getProduct() {
    return this.http.get(`http://light-it-04.tk/api/adverts?limit=${this.limit}`)
      .pipe(
        map((response: ResponseModel) => {
          const result: ProductModel[] = [];
          response.results.forEach(item => result.push(item));
          return result;
        }));
  }
}
