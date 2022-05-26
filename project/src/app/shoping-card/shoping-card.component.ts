import { Component, OnInit } from '@angular/core';
import {ShoppingCard} from "../Service/ShoppingCard";
import {product} from "../Service/product";
@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent   implements OnInit {

  items = this.ObserverService.getItems();
  priced = this.ObserverService.getPrice();

  constructor(
    public ObserverService: ShoppingCard
  ) {}

  deleteProduct(object:product){
    this.ObserverService.delete(object);
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.priced = this.ObserverService.getPrice();
  }

}
