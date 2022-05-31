import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
  // @ViewChild('search') Search : ElementRef | undefined
  // // @ts-ignore
  // @HostListener(this.Search:keydown.escape, ['$event'])
  // onKeydownHandler(event: KeyboardEvent) {
  //   if (event.key === 'Escape' && (this.StyleHelper.catalog_list  this.StyleHelper.sidebar  this.StyleHelper.popup_list)) {
  //     this.StyleHelper.catalog_list = false;
  //     this.StyleHelper.sidebar = false;
  //     this.StyleHelper.popup_list = false;
  //   }
  // }
  public keys: string[] = this.ProductService.getKeys();
  selectedOption: any = this.keys[0];
  public search:string =""
  constructor(
    private ObserverService: ShoppingCard,
    public dialog: MatDialog,
    private PopupService: PopupService,
    private ProductService: ProductService,
  ) {
    this.Selectively(this.keys[0])
  }

  ngOnInit(): void {
    // this.ObserverService.favorites$.subscribe((count) => this.Selectively(count))
  }

  openDialog() {
    this.PopupService.openDialog();
  }

  openProfile() {
    this.PopupService.openDialogProfile()
  }


  Selectively(object: any) {
    console.log(object)
    this.ProductService.testset(object)
    // console.log(this.ObserverService.favorites$)
    // console.log(this.ObserverService.favorite)
  }
  test(){
    console.log("I a,m ")
    if(this.search != ""){
      console.log(this.search)
      this.ProductService.find(this.search)
    }
    else{
      this.ProductService.testset(this.selectedOption)
    }
  }
  ngDoCheck() {
    // console.log("I a,m ")
    // if(this.search != ""){
    //   console.log(this.search)
    //   this.ProductService.find(this.search)
    // }
    // else{
    //   this.ProductService.testset(this.selectedOption)
    // }
  }


  }
