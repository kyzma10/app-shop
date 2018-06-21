import { ProductModel } from "./product.model";

export class ResponseModel {
  public results: ProductModel[];

  constructor(json: any) {
    this.results = json.results;
  }
}
