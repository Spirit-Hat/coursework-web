import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCard} from "../../Service/ShoppingCard";
import {ProductService} from "../../Service/product.service";
import {product} from "../../Service/product";
import {PopupService} from "../../Service/popup.service";

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<product>();
  @Input() product: product[] = [];

  public favorite(Object:product): void {
    this.buttonClick.emit(Object);
  }

  ngOnInit(): void {

  }


}
