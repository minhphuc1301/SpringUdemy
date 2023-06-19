import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username == 'admin@gmail.com' && password == '1') {
      sessionStorage.setItem('user', username)
      return true;
    } return false;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    return user != null
  }

  logout() {
    let user = sessionStorage.getItem('user');
    if (user != null) {
      sessionStorage.removeItem('user')
    }
  }
}
