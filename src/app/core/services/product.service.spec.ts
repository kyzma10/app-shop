import { TestBed, inject } from '@angular/core/testing';
import { ProductService } from './product.service';
import {HttpClientModule, HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {defer} from 'rxjs/index';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('ProductService', () => {
  let httpClientSpy: {get: jasmine.Spy};
  let productService: ProductService;

  const mockProducts = [ { pk: 2, price: 4200, theme: 'product 1' },
    { pk: 10, price: 8000, theme: 'product 9'} ];

  const mockProduct = { pk: 2, price: 4200, theme: 'product 1' };

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    productService = new ProductService(<any> httpClientSpy);

    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([ProductService], (productService: ProductService) => {
    expect(productService).toBeTruthy();
  }));

  it('should be created method getProducts', inject([ProductService],
    (productService: ProductService) => { expect(productService.getProducts).toBeTruthy();
    }));

  it('should return expected products (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(asyncData(mockProducts));

    productService.getProducts().subscribe(
      products => expect(products).toEqual(mockProducts, 'expected products'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    productService.getProducts().subscribe(
      products => fail('expected an error, not products'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

  it('should be created method getProduct', inject([ProductService],
    (productService: ProductService) => { expect(productService.getProduct).toBeTruthy();
    }));

  it('should return expected product (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(asyncData(mockProduct));

    productService.getProducts().subscribe(
      product => expect(product).toEqual(mockProduct, 'expected product'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404 called getProduct', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    productService.getProduct(1).subscribe(
      product => fail('expected an error, not product'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

  it('should be created method getProductsMore', inject([ProductService],
    (productService: ProductService) => { expect(productService.getProductsMore).toBeTruthy();
    }));

  it('should return expected products more (HttpClient called once)', () => {

    httpClientSpy.get.and.returnValue(asyncData(mockProducts));

    productService.getProductsMore().subscribe(
      products => expect(products).toEqual(mockProducts, 'expected products more'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    productService.getProductsMore().subscribe(
      products => fail('expected an error, not products more'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

  it('should be created method addAdvert', inject([ProductService],
    (productService: ProductService) => { expect(productService.addAdvert).toBeTruthy()
  }));

  it('should be created method addImage', inject([ProductService],
    (productService: ProductService) => { expect(productService.addImage).toBeTruthy()
    }));
});
