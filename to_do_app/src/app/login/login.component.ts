import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['welcome', sessionStorage.getItem('user')])

    }
  }
  checkLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
    } else {

    }

  }
}
