import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import {product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  public favorite:product[] = []

  public favorites$ = new Subject<product>();
  // public favorites$:  BehaviorSubject<product>;


  public changeCount(product: product) {
    console.log(product);
    this.favorites$.next(product);
    this.favorite.push(product);
  }
  public getItems(){
    return this.favorite
  }
  constructor() {
    // this.favorites$ = new BehaviorSubject(null);
  }
}
