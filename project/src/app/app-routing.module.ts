import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopBarComponent} from "./home/top-bar/top-bar.component";

const routes: Routes = [
  {path:'',component:TopBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
