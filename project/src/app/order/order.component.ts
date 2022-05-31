import { Component, OnInit } from '@angular/core';
import {ShoppingCard} from "../Service/ShoppingCard";
import {product} from "../Service/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  product: product[] = [];
  priced = this.ShoppingCard.getPrice();
  NewForm: FormGroup | any


  deleteProduct(object:product){
    this.ShoppingCard.delete(object);
  }
  Favorite(object:product){
    this.ShoppingCard.changeCount(object);
  }
  constructor(
    public ShoppingCard: ShoppingCard,
  ) { }
  Test(){
    alert("success");
  }

  ngOnInit(): void {
    this.NewForm = new FormGroup({
      'FirstName': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\'\\-,.А-Я][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:\\s[\\]]{2,}$')]),
      'LastName': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\'\\-,.А-Я][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:\\s[\\]]{2,}$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'phone': new FormControl(null, [Validators.required,
        Validators.pattern('[0-9]{9}')])
    })
    this.product =this.ShoppingCard.getItems()
  }
  ngDoCheck(){
    this.priced = this.ShoppingCard.getPrice();
  }
  FirstNameErrors() {
    return this.FirsrName.errors?.['required'] ? 'Need to fill' :  this.FirsrName.errors?.['pattern'] ? 'You can use А-Я' :''
  }
  LastNameErrors() {
    return this.LastName.errors?.['required'] ? 'Need to fill' :  this.LastName.errors?.['pattern'] ? 'You can use А-Я' :''
  }
  EmailErrors() {
    return this.email.errors?.['required'] ? 'Need to fill' :
      this.email.errors?.['email'] ? 'Incorrect email' : ''
  }

  PhoneErrors() {
    return this.phone.errors?.['required'] ? 'Need to fill' : this.phone.errors?.['pattern'] ? 'You can use 0-9' : ''
  }



  get FirsrName() {
    return this.NewForm.get('FirstName');
  }
  get LastName() {
    return this.NewForm.get('LastName');
  }
  get email() {
    return this.NewForm.get('email');
  }

  get phone() {
    return this.NewForm.get('phone');
  }

}
