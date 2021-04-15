import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertMessage } from 'src/assets/alertMessage';

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

  constructor(private userService : UserService, 
    private alertService : AlertService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'dob' : new FormControl(null, [Validators.required]),
      'pass' : new FormControl(null, [Validators.required]),
      'confirmPassword' : new FormControl(null, [Validators.required]) ,
      'profilePicUrl' : new FormControl(null, [])     
    })
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
    }
  }

  getSource(){
    return '../../assets/images/default_profile_pic.png'
  }


}
