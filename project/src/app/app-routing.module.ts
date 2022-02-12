import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TopBarComponent} from "./home/top-bar/top-bar.component";
import {ProductInfoComponent} from "./product/product-info/product-info.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'detail/:id', component: ProductInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
