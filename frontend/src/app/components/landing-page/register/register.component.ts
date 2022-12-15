import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  show = false;
  visibility = 'password-hidden';
  attribute = 'password';
  submitted = false;
  emailUsed = false;
  loginUsed = false;

  onSubmit(form: NgForm) {
    this.loginUsed = false;
    this.emailUsed = false;
    const fullName = form.value.firstName + ' ' + form.value.lastName;
    const user = {
      user_name: fullName,
      user_login: form.value.ulogin,
      user_password: form.value.password,
      user_email: form.value.email,
    };
    console.log(user);
  }
  toogle() {
    this.show = !this.show;
    this.show ? (this.attribute = 'text') : (this.attribute = 'password');
    this.show
      ? (this.visibility = 'password-visible')
      : (this.visibility = 'password-hidden');
  }
}
