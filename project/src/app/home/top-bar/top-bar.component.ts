import {Component, OnInit} from '@angular/core';
import {ShoppingCard} from "../../Service/ShoppingCard";
import {MatDialog} from '@angular/material/dialog';
import {ShopingCardComponent} from "../../shoping-card/shoping-card.component";
import {PopupService} from "../../Service/popup.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private ObserverService: ShoppingCard,
    public dialog: MatDialog,
    private PopupService :PopupService,
  ) {
  }

  ngOnInit(): void {
    this.ObserverService.favorites$.subscribe((count) => this.test(count))
  }
  openDialog(){
    this.PopupService.openDialog();
  }


  test(object: any) {
    console.log(object)
    console.log(this.ObserverService.favorites$)
    console.log(this.ObserverService.favorite)
  }

}
