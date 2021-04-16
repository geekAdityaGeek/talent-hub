import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() logoutEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logout(){
    this.logoutEmitter.emit()
  }

  getLogoSource(){
    return "../../../assets/images/logo.jpeg"
  }

}
