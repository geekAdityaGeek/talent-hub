import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { AlertMessage } from 'src/assets/alertMessage';
import { PostDetailComponent } from '../_components/post-detail/post-detail.component';
import { Alert } from '../_model/alert';
import { Comment } from '../_model/Comment';
import { Post } from '../_model/post';
import { AlertService } from './alert.service';
import { FeedsService } from './feeds.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  constructor(private modal : MatDialog, 
    private feedsService : FeedsService,
    private alertService : AlertService) { }

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
      error => {
        this.alertService.generateAlert(AlertMessage.getAletMessage("PostDetailError")) 
      }
    ).finally( )
  }


}
