import { Component, Input, OnInit } from '@angular/core';
import { Like } from 'src/app/_model/like';
import { Post } from 'src/app/_model/post';
import { AlertService } from 'src/app/_services/alert.service';
import { FeedsService } from 'src/app/_services/feeds.service';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { PostDetailService } from 'src/app/_services/post-detail.service';
import { ApiPaths } from 'src/assets/apiPaths';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post : Post
  likeLoading : boolean = false

  constructor(private feedsService : FeedsService,
    private postDetailService : PostDetailService,
    private portfolioService : PortfolioService) { }

  ngOnInit() {
    console.log(this.post)
  }

  getProfilePicSource(){
    if(this.post.profilePicUrl){
      return ApiPaths.getApiPath("getFile",this.post.profilePicUrl)
    }
    return '../../../assets/images/default_profile_pic.png'
  }

  getContentType() : string{
    if(this.post.contentType){
      return this.post.contentType.split("/")[0]
    }
    return null
  }

  getContentSource() : string {
    if(this.post.filenames.length > 0 && this.post.filenames[0]){
      return ApiPaths.getApiPath("getFile",this.post.filenames[0])
    }
    return null
  }

  increaseLikes(){
    this.likeLoading = true
    let data : Like = new Like()
    data.parent_id = this.post.id
    data.parent_type = "Post"
    this.feedsService.increaseLikes(data).then(
      (response) => {
        console.log(response)
        this.post.likes = response.likes
        this.post.userLike = response.user_like
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally(
      () => {this.likeLoading = false}
    )
  }

  viewDetails(){
    this.postDetailService.generateDetailView(this.post)
  }

  displayPortfolio(){
    this.portfolioService.generatePortfolioView(this.post.owner)
  }

}
