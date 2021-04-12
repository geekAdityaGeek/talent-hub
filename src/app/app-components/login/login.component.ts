import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

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
    private route : ActivatedRoute) {
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

  login(){debugger

    if(!this.loginForm.valid)
      return false;

    this.loading = true
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
    .add( isSuccessfullLogin => { 
      if(isSuccessfullLogin){
        this.router.navigate([this.returnUrl]);
      }else{
        this.loading = false
      }
    })
    


  }

}
