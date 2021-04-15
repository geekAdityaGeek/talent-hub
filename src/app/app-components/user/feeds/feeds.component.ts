import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/_model/domain';
import { Post } from 'src/app/_model/post';
import { AlertService } from 'src/app/_services/alert.service';

import { FeedsService } from 'src/app/_services/feeds.service';
import { AlertMessage } from 'src/assets/alertMessage';

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
  constructor(private feedsService : FeedsService,
    private alertService :AlertService) { }


  ngOnInit() {
    this.currentIndex = 0
    this.domainLoading = true
    this.postsLoading = true
    let domainPromise = this.feedsService.getAllDomains()
    domainPromise.then(
      response => {
        for(let idx in response){
          let domain : Domain = this.feedsService.getDomainFromResponse(response[idx])
          this.domains.push(domain)
        }
        this.loadPosts(0)        
      }
    ).catch(
      error => {
        this.alertService.generateAlert(AlertMessage.getAletMessage('serverDataFetchError'))
      }
    ).finally(
      () => { this.domainLoading = false}
    )
  }

  loadPosts(idx : number){
    this.postsLoading = true
    this.posts = new Array<Post>()
    this.feedsService.getPostsByDomainId(this.domains[idx])
        .then( response => {
          this.postsLoading = false
          for(let idx in response){
            let post : Post = this.feedsService.convertToPost(response[idx])
            this.posts.push(post)
          }
          
        }).catch( error => { this.alertService.generateAlert(AlertMessage.getAletMessage('serverDataFetchError'))} )
        .finally(()=>{ this.postsLoading = false })
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


}
