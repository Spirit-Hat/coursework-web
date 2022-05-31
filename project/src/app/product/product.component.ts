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
  filtred: product[] = [];

  public hit_sale_clicked: boolean = false;
  public all_clicked: boolean = false;
  public new_clicked: boolean = false;

  favorite(object:product){
    if(!object.clicked){
      this.ObserverService.changeCount(object)
    }
    else{
      this.PopupService.openDialog()
    }
  }
  all(){
  this.product = this.ProductService.getProduct();
  }

  // hitSale(){
  //   this.filtred = this.product
  //   if(!this.hit_sale_clicked){
  //     this.filtred.filter((value: object) => {
  //       // @ts-ignore
  //       if (value['bestseller'])
  //         // @ts-ignore
  //         return value['bestseller']
  //     })
  //     this.product =this.filtred
  //   }
  //   this.hit_sale_clicked = !this.hit_sale_clicked
  // }
  hitSale(){
    if(!this.hit_sale_clicked) {
      this.hit_sale_clicked =true
      const storage: product[] = []
      this.product.forEach(index => {
        if (index.bestseller) {
          storage.push(index)
        }
      })
      this.filtred = this.product;

      this.product = [];
      this.product = storage;
    }else {
      this.hit_sale_clicked =false
      this.product =[]
      this.product =this.filtred
    }
  }
  newSale_(){
    if(!this.hit_sale_clicked) {
      const storage: product[] = []
      this.product.forEach(index => {
        if (index.bestseller) {
          storage.push(index)
        }
      })
      this.filtred = this.product;

      this.product = [];
      this.product = storage;
    }else {
      this.product =[]
      this.product =this.filtred
    }
  }

  new(){
    const storage: product[] =[]
    this.product.forEach(index =>{
      if(index.new){
        storage.push(index)
      }
    })
    this.filtred = this.product;
    this.product = [];
    this.product = storage;
  }


  constructor(
  private ProductService: ProductService ,
  private ObserverService: ShoppingCard,
  private PopupService :PopupService,
  ) {
    this.product = this.ProductService.getProduct()

  }

  ngOnInit(): void {
    this.ProductService.getProduct()
    this.ProductService.mock$.subscribe((count) => this.reloud(count));

    //   .forEach(element => this.product.push(element))
  }
  reloud(s :number){
    this.product = this.ProductService.getProduct()
  }
  // ngOnChanges(){
  //   this.product = this.ProductService.getProduct()
  //   console.log(this.product)
  //   // this.ProductService.getProduct()
  //   // .forEach(element => this.product.push(element))
  //
  //     }
  //

}
