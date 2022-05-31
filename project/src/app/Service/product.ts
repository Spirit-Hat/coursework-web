export class product {
  id!: number;
  name!: string;
  title!: string
  logos!: string;
  description!: string;
  oldPrice!:  string;
  price!: string;
  clicked: boolean =false;
  bestseller: boolean =false;
  new:  boolean =false;
  constructor(id: number, name: string ,title: string ,logo: string , description:string,oldPrice: string, Price:string) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.logos = logo;
    this.description = description;
    this.oldPrice = oldPrice;
    this.price = Price;

  }
}
