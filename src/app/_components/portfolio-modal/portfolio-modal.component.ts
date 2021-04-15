import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Portfolio } from 'src/app/_model/portfolio';
import { AlertService } from 'src/app/_services/alert.service';
import { PostDetailService } from 'src/app/_services/post-detail.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertMessage } from 'src/assets/alertMessage';
import { ApiPaths } from 'src/assets/apiPaths';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements OnInit {

  portfolio : Portfolio = new Portfolio()
  connetionProcessing = false

  constructor(public dialogRef: MatDialogRef<PortfolioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Portfolio,
    private postDetailService : PostDetailService,
    private userService : UserService,
    private alerService : AlertService) { 
      this.portfolio = data
      console.log(this.portfolio)
    }

  ngOnInit() {}

  getProfilePictureSrource(){
    
    if(this.portfolio.basicDetails.profilePicUrl){
      return ApiPaths.getApiPath("getFile", this.portfolio.basicDetails.profilePicUrl)
    }
    
    return '../../../assets/images/default_profile_pic.png'
  }

  follow(){
    this.connetionProcessing = true
    this.userService.follow(this.portfolio.basicDetails.id).then(
      response => {
        this.portfolio.isFollowing = !this.portfolio.isFollowing
        this.portfolio.totalFollowers = this.portfolio.totalFollowers + 1
      }
    ).catch(
      error => {
        this.alerService.generateAlert(AlertMessage.getAletMessage('updateConnectionError'))
      }
    ).finally(()=>this.connetionProcessing = false)
  }

  unfollow(){
    this.connetionProcessing = true
    this.userService.unfollow(this.portfolio.basicDetails.id).then(
      response => {
        this.portfolio.isFollowing = !this.portfolio.isFollowing
        this.portfolio.totalFollowers = this.portfolio.totalFollowers - 1
      }
    ).catch(
      error => {
        this.alerService.generateAlert(AlertMessage.getAletMessage('updateConnectionError'))
      }
    ).finally(()=>this.connetionProcessing = false)

  }

  getProfilePicSource(idx : number){
    if(this.portfolio.posts[idx].profilePicUrl){
      return ApiPaths.getApiPath("getFile",this.portfolio.posts[idx].profilePicUrl)
    }
    return '../../../assets/images/default_profile_pic.png'
  }

  viewDetails(idx : number){
    this.postDetailService.generateDetailView(this.portfolio.posts[idx])
  }

}
