import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/_model/Comment';
import { Like } from 'src/app/_model/like';
import { Post } from 'src/app/_model/post';
import { FeedsService } from 'src/app/_services/feeds.service';
import { ApiPaths } from 'src/assets/apiPaths';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post : Post
  comments : Array<Comment>
  
  comment : string
  posting : boolean = false

  likeLoading : boolean = false

  constructor(public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private feedsService : FeedsService) {
      this.post = data.post
      this.comments = data.comments 
     }

  ngOnInit() {
  }

  getProfilePicSource(){
    if(this.post.profilePicUrl){
      return ApiPaths.getApiPath("getFile",this.post.profilePicUrl)
    }
    return '../../assets/images/default_profile_pic.png'
  }

  getCommentOwnerProfilePicSource(idx : number){
    let filename = this.comments[idx].owner_pic
    if(filename){
      return ApiPaths.getApiPath("getFile",filename)
    }
    return '../../assets/images/default_profile_pic.png'
  }

  postComment(){

    this.posting = true
    this.feedsService.postComment(this.comment, this.post.id).then(
      response => {
        let comment : Comment = this.feedsService.getCommentFromResponse(response)
        this.comments.unshift(comment)
        this.comment = null
      }
    ).catch(
      error => {console.log(error)}
    ).finally(
      () => {this.posting = false}
    )
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

}
