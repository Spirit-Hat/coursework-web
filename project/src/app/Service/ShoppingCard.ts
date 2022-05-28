import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {product} from "./product";
import {ProductService} from "./product.service"


@Injectable({
  providedIn: 'root'
})
export class ShoppingCard {

  private price: number = 0;
  public favorite: product[] = []

  public favorites$ = new Subject<product>();

  // public favorites$:  BehaviorSubject<product>;

  public getPrice() {
    return this.price;
  }

  public delete(object: product) {
    console.log(object)
    //
    // this.ProductService.clicked(false,object.id)

    var index = this.favorite.map(x => {
      return x.id;
    }).indexOf(object.id);
    console.log(index)
    this.favorite.splice(index, 1);
    this.calculate()
  }

  private calculate() {
    this.price = 0;
    this.favorite.forEach((object) => {
      this.price = Number(this.price) + Number(object.price)
    })
  }

  private findById(object: number) {
    let bool = false;
    this.favorite.forEach(test => {
      if (test.id == object) {
        bool = true;
      }
    })
    return bool
  }

  public changeCount(product: product) {
    // product.clicked = true;
    this.ProductService.clicked(true,product.id)
    console.log(product);
    if (!this.findById(product.id)) {
      this.favorite.push(product);
      this.calculate();
    }
    // this.favorites$.next(product);
  }

  public getItems() {
    return this.favorite
  }

  constructor(
    private ProductService: ProductService ,
  ) {
    // this.favorites$ = new BehaviorSubject(null);
  }
}
