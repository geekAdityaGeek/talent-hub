import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoogedInUser } from './_model/loggedInUser';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser : LoogedInUser
  logginOut : boolean = false

  constructor(private authenticationService : AuthenticationService,
    private router : Router,
    private userService : UserService){
    this.authenticationService.currentUserSubject.subscribe( 
      user => { this.currentUser = user}
    )
  }

  logout(){
    this.logginOut = true
    //this.userService.logoutAllSessions().then(
    this.userService.logoutSession().then(
      response => {
        this.authenticationService.logout()
        this.router.navigate(['/login']);
      }
    ).catch(
      error => {
        if(error.status = 401){
          this.authenticationService.logout()
          this.router.navigate(['/login']);
        }
      }
    ).finally(
      () => { this.logginOut = false}
    )
  }
    
}
