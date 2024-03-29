import { Injectable } from '@angular/core';
import {product} from "./product";
import {ProductService} from "./product.service"

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private _favorite: product[] = []


  get favorite(): product[] {
    return this._favorite;
  }
  favorireSaved(){
  if(this.ProductService.getFavoriteList() != null){
    this._favorite = []
    // @ts-ignore
    this.ProductService.getFavoriteList().subscribe((response)=>{
      response.forEach(item => {
        this._favorite.push(new product(item.id,item.title,item.logos,item.price))
      })
    })
  }
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
      // this._favorite.push(product);
      // console.log(this._favorite)

    // // product.clicked = true;
    // this.ProductService.clicked(true,product.id)
    // console.log(product);
    if (!this.findById(product.id)) {
      this._favorite.push(product);
    //   this.calculate();
    }
    // // this.favorites$.next(product);
  }

  constructor(
    private ProductService: ProductService ,
  ) {
    this.favorireSaved()
  }
  ngOnInit() {
  }

  }
