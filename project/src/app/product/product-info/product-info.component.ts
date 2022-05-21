import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { product } from 'src/app/Service/product';
import {ProductService} from "../../Service/product.service";

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
    private ProductService: ProductService

  ) {
    console.log("I am still alive ")
  }

  test(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.product = this.ProductService.getProductByID(id)
    console.log(this.product.logos)
  }

  ngOnInit(): void {
    console.log("hello world ")
    this.test()
  }

}
