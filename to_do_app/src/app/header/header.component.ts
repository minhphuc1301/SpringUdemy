import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
}
