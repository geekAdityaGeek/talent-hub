import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accomplishment } from 'src/app/_model/accomplishment';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertMessage } from 'src/assets/alertMessage';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  addingAccomplishment : boolean = false
  accomplishmentForm : FormGroup
  loading : boolean = false
  accomplishments : Array<Accomplishment> = new Array<Accomplishment>()
  
  constructor(private userService : UserService,
    public datepipe: DatePipe, private alertService : AlertService) { }
  
  ngOnInit() {

    this.accomplishmentForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'accomplishmentDate' : new FormControl(null, [Validators.required])
    })

    this.loading = true
    this.userService.getUserDetails().then(
      response => {
        debugger
        let user = this.userService.formUserFromResponse(response)
        this.accomplishments = user.accomplishments
        
      }
    ).catch(
      error => {  this.alertService.generateAlert(AlertMessage.getAletMessage('serverDataFetchError'))}
    ).finally(
      ()=>{this.loading = false}
    )
  }

  addAccomplishment(){

    let accomplishmentToBeSaved = Array.from(this.accomplishments)
    this.addingAccomplishment = true
    let accomplishment : Accomplishment = new Accomplishment()
    accomplishment.title = this.accomplishmentForm.get('title').value
    accomplishment.description = this.accomplishmentForm.get('description').value
    accomplishment.date = new Date(this.accomplishmentForm.get('accomplishmentDate').value)

    accomplishmentToBeSaved.push(accomplishment)
    this.saveAccomplishment(accomplishmentToBeSaved)    
  }

  saveAccomplishment(accomplishmentToBeSaved){
    this.userService.updateUser({'accomplishments' : accomplishmentToBeSaved}).then(
      (response) => {
        this.accomplishments = Array.from(accomplishmentToBeSaved)
        this.accomplishmentForm.reset()
      }
    ).catch(
      (error) => {
        this.alertService.generateAlert(AlertMessage.getAletMessage('accomplishmentSaveError'))
      }
    ).finally(
      () => { this.addingAccomplishment = false}
    )
  }

  deleteAccomplishment(idx : number){
    let accomplishmentToBeSaved = Array.from(this.accomplishments)
    accomplishmentToBeSaved.splice(idx,1)
    this.saveAccomplishment(accomplishmentToBeSaved)
  }

  updateAccomplishment(idx){
    this.accomplishmentForm.get('title').setValue(this.accomplishments[idx].title)
    this.accomplishmentForm.get('description').setValue(this.accomplishments[idx].description)
    this.accomplishmentForm.get('accomplishmentDate').setValue( this.datepipe.transform( this.accomplishments[idx].date, 'yyyy-MM-dd'))
    this.accomplishments.splice(idx, 1)
  }

}
