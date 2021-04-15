import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { domain } from 'process';
import { Accomplishment } from 'src/app/_model/accomplishment';
import { Domain } from 'src/app/_model/domain';
import { Portfolio } from 'src/app/_model/portfolio';
import { Post } from 'src/app/_model/post';
import { User } from 'src/app/_model/user';
import { PostDetailService } from 'src/app/_services/post-detail.service';
import { ApiPaths } from 'src/assets/apiPaths';
import { PostDetailComponent } from '../post-detail/post-detail.component';

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
    private postDetailService : PostDetailService) { 
      this.portfolio = data
      console.log(this.portfolio)
    }

  ngOnInit() {

    /**
    this.portfolio.basicDetails = new User()
    this.portfolio.basicDetails.name = "Aditya Saha"
    this.portfolio.basicDetails.email = "adi96saha@gmail.com"
    this.portfolio.basicDetails.dob = new Date("1996-10-20")
    this.portfolio.basicDetails.country = "India"
    this.portfolio.basicDetails.state = "West Bengal"

    let accomplishment1 = new Accomplishment()
    accomplishment1.title = "Sample Accomplishment 1"
    accomplishment1.description = "Accomplishment Dscription 1"
    accomplishment1.date = new Date("2020-10-20")
    let accomplishment2 = new Accomplishment()
    accomplishment2.title = "Sample Accomplishment 2"
    accomplishment2.description = "Accomplishment Dscription 2"
    accomplishment2.date = new Date("2020-10-21")
    let accomplishment3 = new Accomplishment()
    accomplishment3.title = "Sample Accomplishment 3"
    accomplishment3.description = "Accomplishment Dscription 3"
    accomplishment3.date = new Date("2020-10-22")
    let accomplishment4 = new Accomplishment()
    accomplishment4.title = "Sample Accomplishment 4"
    accomplishment4.description = "Accomplishment Dscription 4"
    accomplishment4.date = new Date("2020-10-22")
    this.portfolio.basicDetails.accomplishments = new Array<Accomplishment>()
    this.portfolio.basicDetails.accomplishments.push(accomplishment1)
    this.portfolio.basicDetails.accomplishments.push(accomplishment2)
    this.portfolio.basicDetails.accomplishments.push(accomplishment3)
    this.portfolio.basicDetails.accomplishments.push(accomplishment4)

    this.portfolio.isSameUser = false
    this.portfolio.isFollowing = true

    this.portfolio.domains = new Array<Domain>()
    let domain1 = new Domain(); domain1.name = "Art"
    let domain2 = new Domain(); domain2.name = "Music"
    let domain3 = new Domain(); domain3.name = "Writing"
    this.portfolio.domains.push(domain1)
    this.portfolio.domains.push(domain2)
    this.portfolio.domains.push(domain3)
    this.portfolio.totalLikes = 500
    this.portfolio.totalFollowing = 200
    this.portfolio.totalFollowers = 1000

    let post1 : Post = new Post()
    post1.title = "Sample Post 1"
    post1.description = "Sample post description 1. This is a sample description"
    let post2 : Post = new Post()
    post2.title = "Sample Post 2"
    post2.description = "Sample post description 2. This is a sample description"
    let post3 : Post = new Post()
    post3.title = "Sample Post 3"
    post3.description = "Sample post description 3. This is a sample description"


    this.portfolio.posts = new Array<Post>();
    this.portfolio.posts.push(post1)
    this.portfolio.posts.push(post2)
    this.portfolio.posts.push(post3)
     */
    
  }

  getProfilePictureSrource(){
    
    if(this.portfolio.basicDetails.profilePicUrl){
      return ApiPaths.getApiPath("getFile", this.portfolio.basicDetails.profilePicUrl)
    }
    
    return '../../../assets/images/default_profile_pic.png'
  }

  follow(){

  }

  unfollow(){

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
