import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Domain } from 'src/app/_model/domain';

import { User } from 'src/app/_model/user';
import { FeedsService } from 'src/app/_services/feeds.service';
import { UserService } from 'src/app/_services/user.service';
import { ApiPaths } from 'src/assets/apiPaths';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  formLoading = false
  uploading = false
  user : User = new User()
  basicDetailsForm : FormGroup
  domains : Array<Domain> = new Array<Domain>()
  nonEditableFeilds = {}
  editableFeilds = {}
  userDomainInterests : Array<Domain> = new Array<Domain>()
  profilePic : File
  
  constructor(private userService : UserService,
    private feedsService : FeedsService,
    public datepipe: DatePipe) { 
      this.editableFeilds['name'] = false
      this.editableFeilds['mobileNumber'] = false
      this.editableFeilds['addressLine1'] = false
      this.editableFeilds['state'] = false
      this.editableFeilds['country'] = false
      this.editableFeilds['interest'] = false
    }

  private formBasicDetailsForm(){
    this.basicDetailsForm = new FormGroup({
      'name' : new FormControl(this.user.name, [Validators.required]),
      'mobileNumber' : new FormControl(this.user.mobileNumber, [Validators.required]),
      'addressLine1' : new FormControl(this.user.addressLine1, []),
      'state' : new FormControl(this.user.state, []),
      'country' : new FormControl(this.user.country, []),
      'interest' : new FormControl(null, [Validators.required]),
    })
    this.nonEditableFeilds['email'] = this.user.email
    this.nonEditableFeilds['dob'] = this. datepipe. transform( this.user.dob, 'yyyy-MM-dd')
  }

  ngOnInit() {

    this.formBasicDetailsForm()

    this.formLoading = true 
    //fetching all domains
    this.feedsService.getAllDomains().then(
      response => {
        for(let idx in response){
          let domain : Domain = this.feedsService.getDomainFromResponse(response[idx])
          this.domains.push(domain)          
        }
      }
    ).catch(
      error => { console.log(error) }
    ).finally(() => {this.formLoading = false})

    this.formLoading = true
    //fetching user details
    this.userService.getUserDetails().then(
      response => {
        //console.log(response)
        this.user = this.userService.formUserFromResponse(response)
        //console.log(this.user)
        this.formBasicDetailsForm()
      }
    ).catch(
      error => {console.log(error)}
    ).finally(
      ()=>{ this.formLoading = false}
    )

    this.formLoading = true
    //fetching user interest
    this.userService.getUserInterests().then(
      response => {debugger
        console.log(response)
        for(let idx in response){
          this.userDomainInterests.push(this.feedsService.getDomainFromResponse(response[idx]))
        }
      }
    ).catch(
      error => {
        console.log(error)
      }
    ).finally(
      () => { this.formLoading = false}
    )
  }

  saveDetails(data, key){
    this.editableFeilds[key] = true
    this.userService.updateUser(data).then(
      response => {
        this.user.name = data[key]
      }
    ).catch(
      error => { console.log(error) }
    ).finally(
      () => { this.editableFeilds[key] = false }
    )    
  }

  addInterest(){debugger
    let interest : Domain ;
    let interestId = this.basicDetailsForm.get('interest').value
    for(let idx in this.domains){
      if(this.domains[idx].id == interestId){
        interest = this.domains[idx]
      }
    }
    this.userDomainInterests.push(interest)
    this.saveInterest()   
    
  }

  delete(idx : number){
    this.userDomainInterests.splice(idx,1)
    this.saveInterest()
  }

  saveInterest(){debugger
    this.editableFeilds['interest'] = true
    let domain_ids = this.userDomainInterests.map( domain => {return domain.id})
    this.userService.updateUser({'domain_ids' : domain_ids}).then(
      response => { this.user.domain_ids = domain_ids}
    ).catch(
      error => {console.log(error)}
    ).finally(
      () => { this.editableFeilds['interest'] = false}
    )
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.profilePic = event.target.files[0]
      this.uploadProfilePic()
    }
  }

  uploadProfilePic(){

    if(this.profilePic){
      this.uploading = true
      let fileData : FormData = new FormData()
      fileData.append('file', this.profilePic)
      this.userService.fileUpload(fileData).then(
        response => {    
          console.log(response) 
          let profilepicFilename =   response.file.filename
          this.userService.updateUser({profilePicUrl : response.file.filename})
          .then(
            response => { 
              this.user.profilePicUrl = profilepicFilename
              console.log(response)}
          ).catch(
            error => console.log(error)
          )   
        }
      ).catch(
        error => { console.log(error) }
      ).finally(
        () => {this.uploading = false}
      )
    }
  }

  getSource(){
    console.log("prifile pic : ")
    if(this.user.profilePicUrl){
      console.log(ApiPaths.getApiPath("getFile", this.user.profilePicUrl))
      return ApiPaths.getApiPath("getFile", this.user.profilePicUrl)
    }
    return '../../../../assets/images/default_profile_pic.png'
  }
  

}
