import { Component, OnInit } from '@angular/core';
import {ShoppingCard} from "../Service/ShoppingCard";
import {ProductService} from "../Service/product.service";
import {product} from "../Service/product";
import {PopupService} from "../Service/popup.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

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
