import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { product } from 'src/app/Service/product';
import {ProductService} from "../../Service/product.service";
import {ShoppingCard} from "../../Service/ShoppingCard";
import {PopupService} from "../../Service/popup.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product: any = '';
  checked = true;
  available = "Є в наявності";
  colors = 'accent'

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private ObserverService: ShoppingCard,
    private PopupService :PopupService,

  ) {}

  clickByButtons(object:product){
      this.ObserverService.changeCount(object)
      this.PopupService.openDialog()

  }

  getId(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.product = this.ProductService.getProductByID(id)
    console.log(this.product.logos)
  }

  ngOnInit(): void {
    this.getId()
    // this.ObserverService.favorites$.subscribe((count)=>this.tests(count))

  }
  // tests(object:any){
  //   console.log(object)
  //   console.log(this.ObserverService.favorites$)
  //   console.log(this.ObserverService.favorite)
  // }

}
