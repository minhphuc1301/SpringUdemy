import { WelcomeService } from './../service/data/welcome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: string = '';
  message!: string;
  constructor(private activatedRoute: ActivatedRoute, private welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['name'];
  }
  getData() {
    this.welcomeService.getData().subscribe(
      reponse => this.handleReponse(reponse),
      error => this.handleError(error)
    );
  }

  getDataWithParam() {
    this.welcomeService.getDataWithParam(this.username).subscribe(
      reponse => this.handleReponse(reponse),
      error => this.handleError(error)
    );
  }

  handleReponse(response: any) {
    this.message = response.message

  }

  handleError(error: any) {
    this.message = error.error.message
  }
}
