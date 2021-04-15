import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Connection } from 'src/app/_model/connection';
import { PortfolioService } from 'src/app/_services/portfolio.service';
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

  constructor(private portfolioService : PortfolioService) { }

  ngOnInit() {
  }

  getSource(){
    if(this.connection && this.connection.profilePicUrl) {
      return ApiPaths.getApiPath('getFile',this.connection.profilePicUrl)
    }
    return '../../assets/images/default_profile_pic.png'
    
  }

  emitAction(){
    this.followUnfollow.emit(this.connection);
  }

  displayPortfolio(){
    this.portfolioService.generatePortfolioView(this.connection.id)
  }



}
