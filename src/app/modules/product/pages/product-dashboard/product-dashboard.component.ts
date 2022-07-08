import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { PRODUCTS } from '../../mock/products-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  products!: Product[];

  @ViewChild(ProductListComponent)
  private productListComponent!: ProductListComponent;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initProductsFromMock();
    console.log("Product Service Injected in ProductDashboardComponent", this.productService.proofOfInject);
  }

  /**
   * Use fake data to init products
   */
  initProductsFromMock() {
    this.products = PRODUCTS;
  }

  addProduct(product: Partial<Product>) {
    // push in dashboard list
    this.products.push(product as Product);

    // push in product list
    this.productListComponent.products.push(product as Product);
  }

}
