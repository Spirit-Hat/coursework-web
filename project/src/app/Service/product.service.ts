import { Injectable } from '@angular/core';
import {product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: product[] = [];



  getProduct(){
    return this.product
  }

  getProductByID(id: number){
    return this.product.find(element => element.id == id
    );
  }

  constructor() {
    this.product.push(new product(1,'Test', "Ноутбук HP Pavilion Gaming 15-ec2013ua (4A7M9EA) Shadow Black\n" , "./assets/7.jpg","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))
    this.product.push(new product(2,'Test' ,"me" , "./assets/1.jpg","hfuydghfudhu","200","150"))
    this.product.push(new product(3,'Tests' ,  "to die" , "./assets/1.jpg","fjdklkfdlfklfkdl","200","150"))


  }
}