import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  show = false;
  visibility = 'password-hidden';
  attribute = 'password';
  invalidInput = false;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    const user = {
      user_email: form.value.email,
      user_password: form.value.password,
    };
    console.log(user);
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 3000);
  }

  toogle() {
    this.show = !this.show;
    this.show ? (this.attribute = 'text') : (this.attribute = 'password');
    this.show
      ? (this.visibility = 'password-visible')
      : (this.visibility = 'password-hidden');
  }
}
