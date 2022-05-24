import { Component, OnInit } from '@angular/core';
import {ObserverService} from "../Service/observer.service";

@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {

  items = this.ObserverService.getItems();
  priced = this.ObserverService.getPrice();


  constructor(
    public ObserverService: ObserverService
  ) {
    // console.log(this.items)
    // this.ObserverService.favorites$.subscribe((count)=>this.tests(count))

  }

  ngOnInit(): void {
    // this.ObserverService.favorites$.subscribe((count)=>this.tests(count))

  }
  tests(object:any){
    // console.log(object)
    // console.log(this.ObserverService.favorites$)
    // console.log(this.ObserverService.favorite)
  }
}
