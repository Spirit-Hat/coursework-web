import { Injectable } from '@angular/core';
import {product} from "./product";
import data from "../../assets/products.json";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: product[] = [];
  fruits: object = {"fruits":[]}

  clicked(click:boolean, id:number) {
    // @ts-ignore
    this.getProductByID(id).clicked =click
  }

  getProduct(){
    return this.product
  }

  getProductByID(id: number){
    return this.product.find(element => element.id == id
    );
  }
  private loadJson(){

  }
  constructor() {
    // @ts-ignore

    this.product = data.catalog.nuts
    console.log(Object.keys(data.catalog.nuts))
    // console.log(data);
    // this.product.push(new product(1,'Test', "Огірок зелений\n" , "./assets/4.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))
    // this.product.push(new product(2,'Test', "Carot\n" , "./assets/carot.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))
    // this.product.push(new product(3,'Test', "Огірок зелений\n" , "./assets/4.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))

    // @ts-ignore
    this.fruits.fruits = this.product
    console.log(this.fruits)
  }
}
