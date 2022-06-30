import { Component, OnInit } from '@angular/core';
import {ShoppingCard} from "../Service/ShoppingCard";
import {ProductService} from "../Service/product.service";
import {product} from "../Service/product";
import {PopupService} from "../Service/popup.service";
import {FavoriteService} from "../Service/favorite.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  product: product[] = [];
  userautorized: number = -1;
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
    private FavoriteService :FavoriteService
  ) {

  }

  ngOnInit(): void {
    this.ProductService.plug$.subscribe((count)=>this.test(count))
    // this.ProductService.getProduct()
    //   .forEach(element => this.product.push(element))
  }
  test(a: any){
    console.log(a)
    this.FavoriteService.favorireSaved()

  }
  ngDoCheck(){
    this.product = this.FavoriteService.favorite

    // this.FavoriteService.favorireSaved()
    // this.ProductService.getProduct()
    // .forEach(element => this.product.push(element))

  }

}
