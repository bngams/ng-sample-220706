import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock/products-data.mock';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root' // Tree shakeable injector
})
export class ProductService {
  proofOfInject = Math.random();

  products: Product[] = [];

  constructor() {
    this.initProductsFromMock();
  }

  /**
   * Use fake data to init products
   */
  initProductsFromMock() {
    this.products = PRODUCTS;
  }
}
