import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Connection } from 'src/app/_model/connection';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-new-connections',
  templateUrl: './new-connections.component.html',
  styleUrls: ['./new-connections.component.css']
})
export class NewConnectionsComponent implements OnInit {

  searchForm : FormGroup
  loading = false
  searchGroupContentCount : number = 0
  connections : Array<Connection> = new Array<Connection>()
  groupCount = 3
  processing : Array<boolean>


  constructor(private userService : UserService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'search' : new FormControl(null, [Validators.required])
    })
  }

  searchConnections(){
    if(!this.searchForm.valid){
      return false
    }
    
    this.loading = true
    let searchPromise : Promise<any> = this.userService.searchConnections(this.searchForm.get('search').value)
    searchPromise.then( response=>{
      this.processing = new Array<boolean>(response.userSearchResult.length)
      if(response.userSearchResult.length % this.groupCount == 0){
        this.searchGroupContentCount = response.userSearchResult.length / this.groupCount
      }else{
        this.searchGroupContentCount = Math.floor(response.userSearchResult.length / this.groupCount)+1
      }
      this.connections = new Array<Connection>()
      for(let idx in response.userSearchResult){
        let connection = this.userService.formConnection(response.userSearchResult[idx])
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
