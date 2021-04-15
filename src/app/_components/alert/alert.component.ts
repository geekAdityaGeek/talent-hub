import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert, AlertType } from 'src/app/_model/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message : string
  type : AlertType
  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert) { 
      this.message = data.message
      this.type = data.type
    }

  ngOnInit() {
  }

  getStyle(){
    if(this.type == AlertType.warning){
      return { 'color' : 'yellow' }
    }else if(this.type == AlertType.success){
      return { 'color' : 'green' }
    }else if(this.type == AlertType.error){
      return { 'color' : 'red' }
    }else {
      return { 'color' : 'white' }
    }

  }

  closeAlert(){
    this.dialogRef.close();
  }

}
