import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PRODUCTS } from '../../mock/products-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  productsFromDashboard!: Product[];

  products: Product[] = [];

  @ViewChildren(ProductCardComponent)
  private productCardChildren!: QueryList<ProductCardComponent>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    // this.initFromInput();
    this.initFromService();
    console.log("Product Service Injected in ProductListComponent", this.productService.proofOfInject);
  }

  private initFromInput(): void {
    this.products = this.productsFromDashboard;
  }

  private initFromService(): void {
    this.products = this.productService.products;
  }

}
