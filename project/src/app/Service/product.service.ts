import {Injectable} from '@angular/core';
import {product} from "./product";
import data from "../../assets/products.json";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: product[] = [];
  filtred: product[] = [];
  keys: string[];

  public mock$ = new Subject<number>();

  clicked(click: boolean, id: number) {
    // @ts-ignore
    this.getProductByID(id).clicked = click
  }

  getKeys() {
    return this.keys;
  }

  getProduct() {
    return this.product
  }

  // getProductByID(id: number) {
  //   return this.product.find(element => element.id == id
  //   );
  // }
  getProductByID(id: any) {
    let itemObject: any
    // @ts-ignore
    this.keys.forEach(key => {
      // @ts-ignore
      data.catalog[key].forEach(element => {
        if (element.id == id) {
          itemObject = element
        }
      })
    })
    return itemObject
  }

  testset(key: string) {

    // console.log(key)
    // @ts-ignore
    // console.log(data.catalog[key])
    // @ts-ignore
    this.product = data.catalog[key]
    this.mock$.next(1);

  }

  private loadJson() {

  }

  find(find: string) {
    this.product = [];

    this.keys.forEach(key => {
      if (key.toLowerCase() == find.toLowerCase()) {
        // @ts-ignore
        this.product = data.catalog[key]
      } else {
        // @ts-ignore
        data.catalog[key].forEach(element => {
          // console.log(element.title.slice(0,3))
          // console.log("--------------------------")

          if (element.title.slice(0,find.length).toLowerCase() === find.toLowerCase()) {
            this.product.push(element);
          }
        })
      }
    })
    this.mock$.next(1);

  }

  constructor() {
    this.keys = Object.keys(data.catalog);
    // @ts-ignore
    this.product = data.catalog.grass;

    console.log(this.keys)
    // console.log(Object.keys(data.catalog))
    console.log(data);
    // this.product.push(new product(1,'Test', "Огірок зелений\n" , "./assets/4.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))
    // this.product.push(new product(2,'Test', "Carot\n" , "./assets/carot.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))
    // this.product.push(new product(3,'Test', "Огірок зелений\n" , "./assets/4.png","The main character in the novel is the private detective, Sherlock Holmes. He is presented through the viewpoint of his friend, Dr John Watson, the narrator of the story. Watson describes him as a sharp and highly intelligent individual. ... Holmes takes great pleasure in solving mysteries and outwitting others","200","150"))

    // @ts-ignore
    // this.fruits.fruits = this.product
    // console.log(this.fruits)
  }
}
