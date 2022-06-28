export class product {
  id!: number;
  title!: string
  logos!: string;
  description: string = "";
  oldPrice:  string = "";
  price!: string;
  clicked: boolean =false;
  bestseller: boolean =false;
  new:  boolean =false;
  constructor(id: number,title: string ,logo: string ,  Price:string) {
    this.id = id;
    this.title = title;
    this.logos = logo;
    // this.description = description;
    // this.oldPrice = oldPrice;
    this.price = Price;

  }
}
