import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  NewForm: FormGroup | any

  ngOnInit() {
    this.NewForm = new FormGroup({
      'Login': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{3,20}$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{3,20}$')]),
      'Repeatpassword': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{3,20}$')])
    })
    // console.log(this.EmailErrors())
    // console.log("123456")

    console.log(this.Login.errors['min'])
  }

  // RepeatPassword(control: FormGroup) {
  //   if (control.value != null) {
  //     if (control.value.length < 3) {
  //       return {"userName": true};
  //     }
  //   }
  //   return null;
  // }

  LoginErrors() {
    return this.Login.errors?.['required'] ? 'Need to fill' :  this.Login.errors?.['pattern'] ? 'You can use a-Z' :''
  }

  EmailErrors() {
    return this.email.errors?.['required'] ? 'Need to fill' :
      this.email.errors?.['email'] ? 'Incorrect email' : ''
  }

  PasswordErrors() {
    return this.password.errors?.['required'] ? 'Need to fill' : this.password.errors?.['pattern'] ? 'You can use a-Z' : ''
  }

  RepeatErrors() {
    return this.repeat.errors?.['required'] ? 'Need to fill' : this.repeat.errors?.['pattern'] ? 'You can use a-Z' : ''
  }

  Test(){
    alert("success");
  }


  get Login() {
    return this.NewForm.get('Login');
  }

  get email() {
    return this.NewForm.get('email');
  }

  get password() {
    return this.NewForm.get('password');
  }

  get repeat() {
    return this.NewForm.get('Repeatpassword');
  }


}
