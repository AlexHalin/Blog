import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() {}

  isLogged() {
    return localStorage.getItem('login') && localStorage.getItem('password');
  }

  login() {
    if (localStorage.getItem('login') && localStorage.getItem('password') ) {
      this.isLoggedIn = true;
    }

  }

  logout() {
    this.isLoggedIn = false;
  }

}
