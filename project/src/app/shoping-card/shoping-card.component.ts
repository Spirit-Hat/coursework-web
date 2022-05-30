import { Component, OnInit } from '@angular/core';
import {ShoppingCard} from "../Service/ShoppingCard";
import {product} from "../Service/product";
import {FavoriteService} from "../Service/favorite.service";
@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent   implements OnInit {

  items = this.ObserverService.getItems();
  priced = this.ObserverService.getPrice();

  constructor(
    public ObserverService: ShoppingCard,
    public FavoriteService:FavoriteService
  ) {}

  deleteProduct(object:product){
    this.ObserverService.delete(object);
  }
  Favorite(object:product){
    this.FavoriteService.changeCount(object);
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.priced = this.ObserverService.getPrice();
  }

}
