import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoogedInUser } from './_model/loggedInUser';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser : LoogedInUser
  constructor(private authenticationService : AuthenticationService,
    private router : Router){
    this.authenticationService.currentUserSubject.subscribe( 
      user => { this.currentUser = user}
    )
  }

  logout(){
    this.authenticationService.logout()
    this.router.navigate(['/login']);
  }

}
