import {Component, OnInit} from '@angular/core';
import {ObserverService} from "../../Service/observer.service";
import {MatDialog} from '@angular/material/dialog';
import {ShopingCardComponent} from "../../shoping-card/shoping-card.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private ObserverService: ObserverService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.ObserverService.favorites$.subscribe((count) => this.test(count))
  }

  openDialog() {
    console.log("Thise")
    const dialogRef = this.dialog.open(ShopingCardComponent,{
      width: '80%',
      panelClass: 'custom-test'
    });
  }

  test(object: any) {
    console.log(object)
    console.log(this.ObserverService.favorites$)
    console.log(this.ObserverService.favorite)
  }

}
