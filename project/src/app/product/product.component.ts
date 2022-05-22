import { Component, OnInit } from '@angular/core';
import {ProductService} from "../Service/product.service";
import {product} from "../Service/product";
import {ObserverService} from "../Service/observer.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: product[] = [];

  test(object:any){
  console.log(object)
  }
  favorite(object:any){
    this.ObserverService.changeCount(object)
  }
  constructor(private ProductService: ProductService , private ObserverService: ObserverService) {
  }

  ngOnInit(): void {
    this.ProductService.getProduct()
      .forEach(element => this.product.push(element))
  }

}
