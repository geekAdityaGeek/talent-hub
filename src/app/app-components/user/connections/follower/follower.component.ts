import { Component, OnInit } from '@angular/core';
import { Connection } from 'src/app/_model/connection';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  loading = false
  searchGroupContentCount : number = 0
  connections : Array<Connection> = new Array<Connection>()
  groupCount = 3
  processing : Array<boolean>


  constructor(private userService : UserService) { }

  ngOnInit() {
    this.searchConnections()
  }

  searchConnections(){
    
    this.loading = true
    let searchPromise : Promise<any> = this.userService.searchFollowerConnections()
    searchPromise.then( response=>{
      console.log(response.followees)
      
      this.processing = new Array<boolean>(response.followees.length)
      if(response.followees.length % this.groupCount == 0){
        this.searchGroupContentCount = response.followees.length / this.groupCount
      }else{
        this.searchGroupContentCount = Math.floor(response.followees.length / this.groupCount)+1
      }
      this.connections = new Array<Connection>()
      for(let idx in response.followees){
        let connection = this.userService.formConnection(response.followees[idx])
        this.connections.push(connection)
      }
       
    }).catch(error => {
      console.log(error)
    }).finally( ()=>{this.loading = false})
  }

  counter(end: number) {
    return new Array(end).fill(0).map( (val, idx)=> {return idx})
  }

  connectionAction(connection : Connection, idx : number){
    
    if(this.connections[idx].following){
      this.processing[idx] = true
      this.userService.unfollow(this.connections[idx].id).then(
        response => {
          this.connections[idx].following = !this.connections[idx].following
        }
      ).catch(
        error => { console.log(error) } 
      ).finally(
        () => {this.processing[idx] = false }
      )
      
    }else{
      this.processing[idx] = true
      this.userService.follow(this.connections[idx].id).then(
        response => {         
          this.connections[idx].following = !this.connections[idx].following
        }
      ).catch(
        error => {  console.log(error) }
      ).finally(
        () => {this.processing[idx] = false}
      )
      
    }
  }

}
