import { Injectable } from '@angular/core';
import {ShopingCardComponent} from "../shoping-card/shoping-card.component";
import {LoginComponent} from "../login/login.component"
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  openDialog() {
    console.log("Thise")
    const dialogRef = this.dialog.open(ShopingCardComponent,{
      width: '80%',
      panelClass: 'custom-test'
    });
  }

  openDialogProfile() {
    const dialogRef = this.dialog.open(LoginComponent,{
    });
  }
  constructor(
    public dialog: MatDialog
  ) { }
}
