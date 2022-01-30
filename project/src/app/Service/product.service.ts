import { Injectable } from '@angular/core';
import {product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: product[] = [];



  getProduct(){
    return this.product
  }


  constructor() {
    this.product.push(new product(1,'Test'))
    this.product.push(new product(2,'Test'))
    this.product.push(new product(3,'Tests'))
    this.product.push(new product(4,'Tests'))
    this.product.push(new product(5,'Tests'))
    this.product.push(new product(6,'Tests'))



  }
}
