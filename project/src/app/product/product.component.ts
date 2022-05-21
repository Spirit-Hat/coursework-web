import { Component, OnInit } from '@angular/core';
import {ProductService} from "../Service/product.service";
import {product} from "../Service/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: product[] = [];


  constructor(private ProductService: ProductService) {
  }

  ngOnInit(): void {
    this.ProductService.getProduct()
      .forEach(element => this.product.push(element))
  }

}
