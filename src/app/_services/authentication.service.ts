import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiPaths } from 'src/assets/apiPaths';
import { LoogedInUser } from '../_model/loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUserSubject : BehaviorSubject<LoogedInUser>;

  constructor(private http : HttpClient) {debugger
    let loggedInUser = null
    if(localStorage.getItem("loggedInUser")){
      loggedInUser = this.createLoggedInUserFromResponse(localStorage.getItem("loggedInUser"))
    }
    this.currentUserSubject = new BehaviorSubject<any>(loggedInUser);
    
  }

  private createLoggedInUserFromResponse(response) : LoogedInUser{
    let loggedInUser = new LoogedInUser()
    loggedInUser.email = response.user.email
    loggedInUser.id = response.user._id
    loggedInUser.token = response.token
    return loggedInUser
  }

  public getLoggedInUser() : LoogedInUser{
    return this.currentUserSubject.value
  }

  login(email : string, password : string){
    let data = { email: email, password : password}
    return this.http.post<any>(ApiPaths.getApiPath("login", undefined), data).subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem("loggedInUser", response) 
        let loggedInUser = this.createLoggedInUserFromResponse(response)
        this.currentUserSubject.next(loggedInUser)
        return true
      },
      (error) => {
        return false
      }
    )
  }

  logout(){
    localStorage.clear()
    this.currentUserSubject.next(null)
  }
}
