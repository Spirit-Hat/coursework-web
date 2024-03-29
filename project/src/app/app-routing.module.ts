import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TopBarComponent} from "./home/top-bar/top-bar.component";
import {ProductInfoComponent} from "./product/product-info/product-info.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import {GalleryComponent} from "./home/gallery/gallery.component";
import {FavoriteComponent} from "./favorite/favorite.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'detail/:id', component: ProductInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: ShopingCardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'order', component: OrderComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
