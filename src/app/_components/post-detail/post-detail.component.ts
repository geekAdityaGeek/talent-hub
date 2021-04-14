import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/_model/Comment';
import { Post } from 'src/app/_model/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post : Post
  comments : Array<Comment>
  constructor(public dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.post = data.post
      this.comments = data.comments 
     }

  ngOnInit() {
    console.log(this.post)
    console.log(this.comments)
  }

}
