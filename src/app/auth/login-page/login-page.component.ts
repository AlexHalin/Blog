import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";
import {Subject} from "rxjs";
import {AuthService} from "../services/auth.service";
import {User} from "../../shared/interfaces";

const forLogin = {
  email: 'admin@admin.com',
  password: 'admin'
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public error$: Subject<string> = new Subject<string>();

  form: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    if (localStorage.getItem('login') === forLogin.email && localStorage.getItem('password') === forLogin.password) {
      this.auth.login()
      this.router.navigate(['/main']);
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    if (user.email === forLogin.email && user.password === forLogin.password) {
      this.auth.login()
      this.form.reset();
      this.router.navigate(['/main']);
      localStorage.setItem('login', user.email)
      localStorage.setItem('password', user.password)

    } else if (user.email !== forLogin.email) {
      this.handleError('INVALID_EMAIL')

    } else if (user.password !== forLogin.password) {
      this.handleError('INVALID_PASSWORD')
    }
  }

  private handleError(message) {
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Incorrect email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Incorrect password');
        break;
    }
  }
}

