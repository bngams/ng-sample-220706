import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  productSubmit = new EventEmitter<Partial<Product>>();

  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
  });

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  submit(): void {
    // récupérer les valeurs du formulaire
    const p: Partial<Product> = this.productForm.value;
    // envoyer le produit a la liste
    // => declencher et propager l'event.
    this.productSubmit.emit(p);


    // add to ProductService
    this.productService.products.push(p as Product);
  }

}
