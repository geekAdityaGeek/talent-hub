import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PortfolioModalComponent } from '../_components/portfolio-modal/portfolio-modal.component';
import { Domain } from '../_model/domain';
import { Portfolio } from '../_model/portfolio';
import { Post } from '../_model/post';
import { FeedsService } from './feeds.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolio : Portfolio
  constructor(private modal : MatDialog,
    private userService : UserService, 
    private feedsService : FeedsService) { }

  formPortfolio(response) : Portfolio{
      let portfolio : Portfolio = new Portfolio()
      portfolio.basicDetails = this.userService.formUserFromResponse(response.user);
      portfolio.isFollowing = response.isFollowing
      portfolio.isSameUser = response.isSameUser
      portfolio.posts = null
      portfolio.totalFollowers = response.totalFollowers
      portfolio.totalFollowing = response.totalFollowing
      portfolio.totalLikes = response.totalLikes
      
      portfolio.domains = new Array<Domain>()
      for(let idx in response.domains){
        portfolio.domains.push(this.feedsService.getDomainFromResponse(response.domains[idx]))
      }

      portfolio.posts = new Array<Post>()
      for(let idx in response.portfolioPosts){
        portfolio.posts.push(this.feedsService.convertToPost(response.portfolioPosts[idx]))
      }
      
      
      return portfolio 
  }

  public generatePortfolioView(userId : string){

    this.userService.getUserPortFolio(userId).then(
      response => {
        this.portfolio = this.formPortfolio(response)
        console.log(this.portfolio)
        let modalConfig : MatDialogConfig = new MatDialogConfig()
        modalConfig.data = this.portfolio
        modalConfig.minHeight = "500px"
        modalConfig.width = "80%"
        this.modal.open(PortfolioModalComponent, modalConfig) 
      }
    ).catch(
      error => {console.log(error)}
    ).finally(
      () => {}
    )

  }


}
