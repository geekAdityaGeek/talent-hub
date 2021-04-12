import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  loading = false
  forgetPasswordForm : FormGroup
  

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email])
    })
  }

  updatePassword(){

    if(!this.forgetPasswordForm.valid)
      return false
      
    this.loading = true
    let updatePassPromise = this.authenticationService.forgetPassword(this.forgetPasswordForm.get('email').value)
    updatePassPromise.then(
      response => {   console.log(response)   }
    ).catch(
      error => { console.log(error) }
    ).finally(
      ()=>{this.loading = false}
    )
  }

}
