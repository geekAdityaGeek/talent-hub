import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Domain } from 'src/app/_model/domain';
import { UploadPost } from 'src/app/_model/uploadPost';
import { FeedsService } from 'src/app/_services/feeds.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-new-uploads',
  templateUrl: './new-uploads.component.html',
  styleUrls: ['./new-uploads.component.css']
})
export class NewUploadsComponent implements OnInit {

  loading : boolean = false
  newUploadForm : FormGroup
  uploading : boolean = false
  domains : Array<Domain> = new Array<Domain>()
  userDomainInterests : Array<Domain> = new Array<Domain>()
  uploadedFile : File

  constructor(private userService : UserService,
    private feedsService : FeedsService) { }

  ngOnInit() {
    this.newUploadForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'portfolioInclude' : new FormControl(false, [Validators.required]) ,
      'interest' : new FormControl(null, [Validators.required]),
      'fileUpload' : new FormControl(null, [Validators.required])
    })
  
    this.loading = true
    this.feedsService.getAllDomains().then(
      response => {
        for(let idx in response){
          let domain : Domain = this.feedsService.getDomainFromResponse(response[idx])
          this.domains.push(domain)          
        }
        this.newUploadForm.get('interest').setValue(this.domains[0])
      }
    ).catch(
      error => { console.log(error)}
    ).finally(
      () => {this.loading = false}
    )
  }

  uploadPostDetails(filenames : Array<string>, contentType :string){
    this.uploading = true

    let data : UploadPost = new UploadPost()
    data.title = this.newUploadForm.get('title').value
    data.description = this.newUploadForm.get('description').value
    data.domain_ids = this.userDomainInterests.map( (domain) => {return domain.id})
    data.portfolio = this.newUploadForm.get('portfolioInclude').value
    data.filenames = filenames
    data.contentType = contentType

    this.userService.uploadPost(data).then(
      (response)=>{console.log(response)}
    ).catch(
      (error) => { console.log(error)}
    ).finally(
      () => {this.uploading = false; this.resetForm()}
    )
  }

  resetForm(){
    this.newUploadForm.reset();
    this.userDomainInterests = new Array<Domain>()
    for(let idx in this.newUploadForm.controls){
      this.newUploadForm.controls[idx].setErrors(null)
    }
  }


  uploadPost(){

    if(this.uploadedFile){
      this.uploading = true
      let fileData : FormData = new FormData()
      fileData.append('file', this.uploadedFile)
      this.userService.fileUpload(fileData).then(
        response => {    
          console.log(response)      
          let filenames : Array<string> = new Array<string>()
          filenames.push(response.file.filename)
          this.uploadPostDetails(filenames, response.file.contentType)
        }
      ).catch(
        error => { console.log(error) }
      ).finally(
        () => {this.uploading = false}
      )
    }else{
      this.uploadPostDetails(new Array(0), null)
    }
  }

  addInterest(){

    let domainId = this.newUploadForm.get('interest').value
    let domainInterest = this.domains.filter( (domain)=> {  return domain.id == domainId})
    this.userDomainInterests.push(domainInterest[0])

  }

  delete(idx:number){
    this.userDomainInterests.splice(idx,1)
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.uploadedFile = event.target.files[0]
    }
  }


}
