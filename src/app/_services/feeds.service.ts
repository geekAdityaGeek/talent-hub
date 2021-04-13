import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiPaths } from 'src/assets/apiPaths';
import { Domain } from '../_model/domain';
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
    post.userLike = postResponse.userLike
    post.portfolio = postResponse.portfolio
    post.filenames = postResponse.filenames
    post.domainIds = postResponse.domain_ids
    post.parentPost = postResponse.parentPost
    post.owner = postResponse.owner
    post.createdAt = postResponse.createdAt
    post.profilePicUrl = post.profilePicUrl
    return post
  }

  public getAllDomains() : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("getAllDomains", undefined)).toPromise()
  }

  getPostsByDomainId(domain) : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("postByDomainId", domain.id)).toPromise()

  }
}
