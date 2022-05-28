import { Component, OnInit } from '@angular/core';
import {ProductService} from "../Service/product.service";
import {product} from "../Service/product";
import {ShoppingCard} from "../Service/ShoppingCard";
import {PopupService} from "../Service/popup.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: product[] = [];

  favorite(object:product){
    if(!object.clicked){
      this.ObserverService.changeCount(object)
    }
    else{
      this.PopupService.openDialog()
    }
  }


  constructor(
  private ProductService: ProductService ,
  private ObserverService: ShoppingCard,
  private PopupService :PopupService,
  ) {

  }

  ngOnInit(): void {
    // this.ProductService.getProduct()
    //   .forEach(element => this.product.push(element))
  }
  ngDoCheck(){
    this.product = this.ProductService.getProduct()
    // this.ProductService.getProduct()
    // .forEach(element => this.product.push(element))

      }


}
