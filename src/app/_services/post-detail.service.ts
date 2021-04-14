import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { PostDetailComponent } from '../_components/post-detail/post-detail.component';
import { Comment } from '../_model/Comment';
import { Post } from '../_model/post';
import { FeedsService } from './feeds.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  constructor(private modal : MatDialog, 
    private feedsService : FeedsService) { }

  public generateDetailView(post : Post){
    
    this.feedsService.getComments(post.id).then(
      response => {
        let comments : Array<Comment> = new Array<Comment>()
        for(let idx in response ){
          let comment : Comment= this.feedsService.getCommentFromResponse(response[idx])
          comments.push(comment)
        }

        let modalConfig = new MatDialogConfig()
        modalConfig.width = '90%'
        modalConfig.height = '80%'
        modalConfig.data = {post : post, comments : comments}
        this.modal.open(PostDetailComponent,modalConfig)
      }
    ).catch(
      error => {console.log(error)}
    ).finally( )
  }


}
