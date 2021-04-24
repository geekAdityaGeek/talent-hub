import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { AlertMessage } from 'src/assets/alertMessage';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioId : string 
  loggedInUserPortfolioId : string

  constructor(private portfolioService :PortfolioService,
    private authenticationService : AuthenticationService,
    private alertService : AlertService) { 
      this.loggedInUserPortfolioId = this.authenticationService.getLoggedInUser().id
    }


  ngOnInit() {
    this.portfolioService.generatePortfolioView(this.loggedInUserPortfolioId)
  }

  generatePortfolio(){
    this.portfolioService.generatePortfolioView(this.portfolioId)
  }

}
