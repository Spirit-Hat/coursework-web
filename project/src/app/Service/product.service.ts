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

  getProductByID(id: number){
    return this.product.find(element => element.id == id
    );
  }

  constructor() {
    this.product.push(new product(1,'Test', "Penis "))
    this.product.push(new product(2,'Test' ,"Suka"))
    this.product.push(new product(3,'Tests' ,  "osat' chlen"))

  }
}
