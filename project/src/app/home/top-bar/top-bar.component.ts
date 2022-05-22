import { Component, OnInit } from '@angular/core';
import {ObserverService} from "../../Service/observer.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private ObserverService: ObserverService) { }

  ngOnInit(): void {
    this.ObserverService.favorites$.subscribe((count)=>this.test(count))
  }
  test(object:any){
  console.log(object)
    console.log(this.ObserverService.favorites$)
    console.log(this.ObserverService.favorite)
  }

}
