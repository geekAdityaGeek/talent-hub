import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Connection } from 'src/app/_model/connection';
import { ApiPaths } from 'src/assets/apiPaths';

@Component({
  selector: 'connection-card',
  templateUrl: './connection-card.component.html',
  styleUrls: ['./connection-card.component.css']
})
export class ConnectionCardComponent implements OnInit {

  @Input() connection : Connection
  @Input() processing : boolean
  @Output() followUnfollow : EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  getSource(){
    if(this.connection && this.connection.profilePicUrl) {
      return ApiPaths.getApiPath('getFile',this.connection.profilePicUrl)
    }else{
      return "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }
  }

  emitAction(){
    this.followUnfollow.emit(this.connection);
  }



}
