import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { afterCurrentDate } from 'src/app/_helpers/Validators/OnAfterCurrentDateValidator';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertMessage } from 'src/assets/alertMessage';
import { confirmPasswordValidator } from '../../_helpers/Validators/confirmPasswordMatchValidator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm :FormGroup
  loading : boolean = false
  confirmPassword : string
  profilePic : File
  url : string | ArrayBuffer

  constructor(private userService : UserService, 
    private alertService : AlertService,
    private datePipe : DatePipe) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z\\s]+$")]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'dob' : new FormControl(null, [Validators.required, afterCurrentDate]),
      'pass' : new FormControl(null, [Validators.required, Validators.pattern("^.{8,}$")]),
      'confirmPassword' : new FormControl(null, [Validators.required]) ,
      'profilePicUrl' : new FormControl(null, [])     
    })
    this.registerForm.setValidators(confirmPasswordValidator('pass','confirmPassword'))  
  }

  register(){

    if(!this.registerForm.valid)
      return false

    this.loading = true

    let formData : FormData = new FormData()
    formData.append('file', this.profilePic)
    this.userService.profilePicUpload(formData).then(
      response => {
        this.registerForm.get('profilePicUrl').setValue(response.file.filename)
        let registrationPromise : Promise<any> = this.userService.registerUser(this.registerForm)
        registrationPromise.then(response => {
            this.registerForm.reset()
            for(let idx in this.registerForm.controls){
              this.registerForm.controls[idx].setErrors(null)
            }
            this.alertService.generateAlert(AlertMessage.getAletMessage('registrationSuccess'))
         })
        .catch(error => { 
          this.alertService.generateAlert(AlertMessage.getAletMessage('registrationError'))
        } )
        
      }
    ).catch(
      error => { this.alertService.generateAlert(AlertMessage.getAletMessage('fileUploadError')) }
    ).finally(
      ()=>{this.loading = false}
    )

    
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.profilePic = event.target.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event) => {
        this.url = (event.target as any).result;
      }

    }
  }

  getSource(){
    if(this.url){
      return this.url
    } 
    return '../../assets/images/default_profile_pic.png'
  }

  

  

}
