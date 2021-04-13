import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/_model/domain';
import { Post } from 'src/app/_model/post';

import { FeedsService } from 'src/app/_services/feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  currentIndex = 0
  domainLoading = false
  postsLoading = false
  domains : Array<Domain> = new Array<Domain>()
  posts : Array<Post> = new Array<Post>()
  constructor(private feedsService : FeedsService) { }

  ngOnInit() {
    this.domainLoading = true
    this.postsLoading = true
    let domainPromise = this.feedsService.getAllDomains()
    domainPromise.then(
      response => {
        for(let idx in response){
          let domain : Domain = this.feedsService.getDomainFromResponse(response[idx])
          this.domains.push(domain)
        }
        this.feedsService.getPostsByDomainId(this.domains[0])
        .then( response => {
          this.postsLoading = false
          for(let idx in response){
            let post : Post = this.feedsService.convertToPost(response[idx])
            this.posts.push(post)
          }
          console.log(this.posts)
        }).catch( error => { console.log(error)} )
        .finally(()=>{ this.postsLoading = false })
      }
    ).catch(
      error => {
        console.log(error)
      }
    ).finally(
      () => { this.domainLoading = false}
    )
  }




}
