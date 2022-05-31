import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { ProductComponent } from './product/product.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { FooterComponent } from './home/footer/footer.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GalleryComponent } from './home/gallery/gallery.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProductGridComponent } from './product/product-grid/product-grid.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ProductComponent,
    ProductInfoComponent,
    LoginComponent,
    FooterComponent,
    ShopingCardComponent,
    GalleryComponent,
    FavoriteComponent,
    ProductGridComponent,
    OrderComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        BrowserAnimationsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
