import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  loggedIn = false;

  constructor() { }

  login(user: User): boolean {
    if (user.userName == 'hilal' && user.password == '12') {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }

    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    console.log(localStorage.getItem('isLogged'));

    localStorage.removeItem("isLogged");
    this.loggedIn = false;
    console.log(localStorage.getItem('isLogged'));

  }
}
