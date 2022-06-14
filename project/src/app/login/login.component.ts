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
    return this.Login.errors?.['required'] ? 'Потрібно заповнити' :  this.Login.errors?.['pattern'] ? 'Ви можете використовувати a-Z 0-9' :''
  }

  EmailErrors() {
    return this.email.errors?.['required'] ? 'Потрібно заповнити' :
      this.email.errors?.['email'] ? 'Неправильна електронна адреса' : ''
  }

  PasswordErrors() {
    return this.password.errors?.['required'] ? 'Потрібно заповнити' : this.password.errors?.['pattern'] ? 'Ви можете використовувати a-Z 0-9' : ''
  }

  RepeatErrors() {
    return this.repeat.errors?.['required'] ? 'Потрібно заповнити' : this.repeat.errors?.['pattern'] ? 'Ви можете використовувати a-Z 0-9' : ''
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
