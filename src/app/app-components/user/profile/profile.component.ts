import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private portfolioService : PortfolioService, 
    private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  generatePortfolio(){
    this.portfolioService.generatePortfolioView(this.authenticationService.getLoggedInUser().id)
  }

}
