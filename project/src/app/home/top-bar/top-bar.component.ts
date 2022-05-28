import {Component, OnInit} from '@angular/core';
import {ShoppingCard} from "../../Service/ShoppingCard";
import {MatDialog} from '@angular/material/dialog';
import {ShopingCardComponent} from "../../shoping-card/shoping-card.component";
import {PopupService} from "../../Service/popup.service";
import {ProductService} from "../../Service/product.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
   public keys: string[] = this.ProductService.getKeys();
  selectedOption: any = this.keys[0];

  constructor(
    private ObserverService: ShoppingCard,
    public dialog: MatDialog,
    private PopupService :PopupService,
    private ProductService: ProductService ,

  ) {
    this.Selectively(this.keys[0])
  }

  ngOnInit(): void {
    this.ObserverService.favorites$.subscribe((count) => this.Selectively(count))
  }
  openDialog(){
    this.PopupService.openDialog();
  }


  Selectively(object: any) {
    console.log(object)
    this.ProductService.testset(object)
    // console.log(this.ObserverService.favorites$)
    // console.log(this.ObserverService.favorite)
  }

}
