import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiPaths } from 'src/assets/apiPaths';
import { Comment } from '../_model/Comment';
import { Domain } from '../_model/domain';
import { Like } from '../_model/like';
import { Post } from '../_model/post';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http : HttpClient) { }

  public getDomainFromResponse(responseDomain) : Domain{
    let domain : Domain = new Domain() 
    domain.id = responseDomain._id
    domain.name = responseDomain.name
    domain.description = responseDomain.description
    return domain
  }

  convertToPost(postResponse) : Post{
    let post : Post = new Post()
    post.id = postResponse._id
    post.title = postResponse.title
    post.description = postResponse.description
    post.likes = postResponse.likes
    post.userLike = postResponse.user_like
    post.portfolio = postResponse.portfolio
    post.filenames = postResponse.filenames
    post.domainIds = postResponse.domain_ids
    post.parentPost = postResponse.parentPost
    post.owner = postResponse.owner
    post.createdAt = postResponse.createdAt
    post.profilePicUrl = postResponse.profilePicUrl
    post.contentType = postResponse.contentType
    return post
  }

  public getCommentFromResponse(response) : Comment{
    let comment : Comment = new Comment()
    comment.id = response.id;
    comment.comment = response.comment;
    comment.createdAt = new Date(response.createdAt)
    comment.likes = response.likes
    comment.owner = response.owner
    comment.owner_name = response.owner_name
    comment.owner_pic = response.owner_pic
    comment.post_id = response.post_id
    comment.user_like = response.user_Like
    return comment
  }

  public getAllDomains() : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("getAllDomains", undefined)).toPromise()
  }

  getPostsByDomainId(domain) : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("postByDomainId", domain.id)).toPromise()

  }

  public increaseLikes(data : Like) : Promise<any> {
    return this.http.post<any>(ApiPaths.getApiPath("increaseLike", undefined), data).toPromise()
  }

  public getComments(postId : string) : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath('getComments', postId)).toPromise()
  } 

  public postComment(comment : string, postId : string) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath('postComment', undefined), {comment:comment, post_id : postId}).toPromise()
  }

  public getAllUserPosts() : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath('getAllUserPosts', undefined)).toPromise()
  }

  public updatePostByPostId(postId : string, data : any) :Promise<any>{debugger
    return this.http.patch<any>(ApiPaths.getApiPath("upadatePostByPostId", postId), data).toPromise()
  }

  public deletePostsByPostId(postId :string) : Promise<any>{
    return this.http.delete<any>(ApiPaths.getApiPath("deletePostByPostId", postId)).toPromise()
  }
}
