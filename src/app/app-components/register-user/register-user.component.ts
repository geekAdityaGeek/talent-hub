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

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'dob' : new FormControl(null, [Validators.required]),
      'pass' : new FormControl(null, [Validators.required]),
      'confirmPassword' : new FormControl(null, [Validators.required])      
    })
  }

  register(){

    if(!this.registerForm.valid)
      return false

    this.loading = true
    let registrationPromise : Promise<any> = this.userService.registerUser(this.registerForm)
    registrationPromise.then(response => {
      console.log(response)
      this.registerForm.reset()
    })
    .catch(error => { console.log(error)} )
    .finally(()=>{ this.loading = false})

  }


}
