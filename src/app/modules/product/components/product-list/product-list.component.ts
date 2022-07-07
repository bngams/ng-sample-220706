import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mock/products-data.mock';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    this.initProductsFromMock();
  }

  /**
   * Use fake data to init products
   */
  initProductsFromMock() {
    this.products = PRODUCTS;
  }

}
