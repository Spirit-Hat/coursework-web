import {Injectable} from '@angular/core';
import {product} from "./product";
import data from "../../assets/products.json";
import {catchError, Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FavoriteService} from "./favorite.service";

export class categories {

  public id: number;
  public categories: string;

  constructor(id: number, categories: string) {
    this.id = id;
    this.categories = categories;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private API_URL = environment.API_URL;


  product: product[] = [];
  filtred: product[] = [];
  keys: string[] = [];
  private _autorized: number = -1;

  public plug$ = new Subject<number>()

  public mock$ = new Subject<number>();


  public get autorized(): number {
    return this._autorized;
  }

  set autorized(value: number) {
    this._autorized = value;
  }

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
    // @ts-ignore
    this.product = data.catalog[key]
    this.mock$.next(1);
  }
  plugNext(user: number){
    console.log("jiufjeduifjwiojdfowi9hj")
    this.plug$.next(user)
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

  getCatalog():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/message/colomns`)
  }
  userAuthorization(login:string,password:string){
    console.log(login)
    let test = "?login="+login+"&password="+password;

    this.http.get<number>(`${this.API_URL}/message/test${test}`)
      .subscribe((response)=>{
        console.log(response)
        this._autorized = response;
        this.plugNext(this._autorized)
      })
  }
  getFavoriteList():Observable<any[]> {
      return this.http.get<any[]>(`${this.API_URL}/message/favorire`)

  }

  constructor(
    private http: HttpClient,
  ) {
    // this.userAuthorization("User1","hello")
     this.getCatalog()
    this.keys = Object.keys(data.catalog);
    // console.log(this.keys)
    // @ts-ignore
    // this.product = data.catalog.grass;

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
