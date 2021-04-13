import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accomplishment } from 'src/app/_model/accomplishment';
import { UserService } from 'src/app/_services/user.service';

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
    public datepipe: DatePipe) { }
  
  ngOnInit() {

    this.accomplishmentForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'accomplishmentDate' : new FormControl(null, [Validators.required])
    })

    this.loading = true
    this.userService.getUserDetails().then(
      response => {
        
        let user = this.userService.formUserFromResponse(response)
        this.accomplishments = user.accomplishments
        console.log(user)
        
      }
    ).catch(
      error => {console.log(error)}
    ).finally(
      ()=>{this.loading = false}
    )
  }

  addAccomplishment(){


    this.addingAccomplishment = true
    let accomplishment : Accomplishment = new Accomplishment()
    accomplishment.title = this.accomplishmentForm.get('title').value
    accomplishment.description = this.accomplishmentForm.get('description').value
    accomplishment.date = new Date(this.accomplishmentForm.get('accomplishmentDate').value)

    this.accomplishments.push(accomplishment)
    this.saveAccomplishment()    
  }

  saveAccomplishment(){
    this.userService.updateUser({'accomplishments' : this.accomplishments}).then(
      (response) => {debugger
        console.log(response)
        this.accomplishmentForm.reset()
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally(
      () => { this.addingAccomplishment = false}
    )
  }

  deleteAccomplishment(idx : number){
    this.accomplishments.splice(idx,1)
    this.saveAccomplishment()
  }

  updateAccomplishment(idx){
    this.accomplishmentForm.get('title').setValue(this.accomplishments[idx].title)
    this.accomplishmentForm.get('description').setValue(this.accomplishments[idx].description)
    this.accomplishmentForm.get('accomplishmentDate').setValue( this.datepipe.transform( this.accomplishments[idx].date, 'yyyy-MM-dd'))
    this.accomplishments.splice(idx, 1)
  }

}
