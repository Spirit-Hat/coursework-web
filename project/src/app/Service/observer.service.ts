import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import {product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private price:number = 0;
  public favorite:product[] = []

  public favorites$ = new Subject<product>();
  // public favorites$:  BehaviorSubject<product>;

  public getPrice(){
   return this.price;
  }
  private calculate(){
    this.price = 0;
    this.favorite.forEach((object)=>{
      this.price = Number(this.price) + Number(object.price)
    })
  }
  private findById(object: number){
    let bool =false;
    this.favorite.forEach(test =>
    {
      if(test.id == object){
        test.clicked = true;
        bool =true;
      }
    })
    return bool
  }
  public changeCount(product: product) {
    console.log(product);
    if(!this.findById(product.id)){
      this.favorite.push(product);
      this.calculate();
    }
    // this.favorites$.next(product);
  }
  public getItems(){
    return this.favorite
  }
  constructor() {
    // this.favorites$ = new BehaviorSubject(null);
  }
}
