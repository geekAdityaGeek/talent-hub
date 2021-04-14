import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

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

  constructor(private userService : UserService) { }

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
            console.log(response)
            this.registerForm.reset()
            for(let idx in this.registerForm.controls){
              this.registerForm.controls[idx].setErrors(null)
            }
         })
        .catch(error => { console.log(error)} )
        
      }
    ).catch(
      error => { console.log() }
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
