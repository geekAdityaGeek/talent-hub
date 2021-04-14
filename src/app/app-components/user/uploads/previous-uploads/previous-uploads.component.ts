import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_model/post';
import { FeedsService } from 'src/app/_services/feeds.service';

@Component({
  selector: 'app-previous-uploads',
  templateUrl: './previous-uploads.component.html',
  styleUrls: ['./previous-uploads.component.css']
})
export class PreviousUploadsComponent implements OnInit {

  currentIndex = 0
  postsLoading = false
  posts : Array<Post> = new Array<Post>()
  postsProcessing : Array<boolean>
  constructor(private feedsService : FeedsService) { }


  ngOnInit() {
    this.currentIndex = 0
    this.loadPosts()
  }

  loadPosts(){
    this.postsLoading = true
    this.posts = new Array<Post>()

    this.feedsService.getAllUserPosts().then(
      response => {
        for(let idx in response.posts){
          this.posts.push(this.feedsService.convertToPost(response.posts[idx]))
        }
        this.postsProcessing = new Array<boolean>(this.posts.length)
        
      }
    ).catch(
      error => {
        console.log(error)
      }
    ).finally(
      () => {
        this.postsLoading = false
      }
    )

  }

  movePrevious(){
    if(this.currentIndex == 0)  return 
    this.currentIndex = this.currentIndex - 1
  }

  moveNext(){
    if(this.currentIndex == this.posts.length-2 || this.currentIndex == this.posts.length-1 )
      return
    this.currentIndex = this.currentIndex + 1
  }

  changePortfolioStatus(idx : number){
    this.postsProcessing[idx]=true
    this.feedsService.updatePostByPostId(this.posts[idx].id, {portfolio : !this.posts[idx].portfolio})
    .then(
      response => {
        this.posts[idx].portfolio = !this.posts[idx].portfolio
      }
    )
    .catch(
      error => {console.log(error)}
    ).finally(
      () => {this.postsProcessing[idx] = false}
    )
  }

  deletePost(idx :number){
    this.postsProcessing[idx] = true
    this.feedsService.deletePostsByPostId(this.posts[idx].id).then(
      response => {
        this.posts.splice(idx, 1)
        this.postsProcessing.splice(idx,1)
        if(this.posts.length == 0)  this.currentIndex = 0
        else if(this.currentIndex==this.posts.length-1) this.currentIndex = this.currentIndex -2
        else if(this.currentIndex == this.posts.length-2) this.currentIndex = this.currentIndex -1
      }
    ).catch(
      error => {console.log(error)}
    ).finally(
      ()=> {this.postsProcessing[idx] = false}
    )
  }



}
