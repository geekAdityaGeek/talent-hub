import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/_model/alert';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AlertMessage } from 'src/assets/alertMessage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl : string
  loading : boolean = false
  loginForm : FormGroup;

  constructor(private authenticationService : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute,
    private alertService : AlertService) {
      //If user is already logged in then redirect to home page
      if(this.authenticationService.getLoggedInUser()){
        this.router.navigate(["/"])
      }
    }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required])
    })    

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  login(){

    if(!this.loginForm.valid)
      return false;

    this.loading = true
    let loginPromise : Promise<any> = this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
    loginPromise.then( response => {
      localStorage.setItem("loggedInUser", JSON.stringify(response)) 
      this.authenticationService.setLoggedInUser(response)
      this.router.navigate([this.returnUrl]);
    }).catch(error => {
      this.alertService.generateAlert(AlertMessage.getAletMessage('invalidLogin'))
      this.loading = false
    })

  }

}
