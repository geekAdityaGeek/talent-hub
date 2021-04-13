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

  constructor(private http : HttpClient) {
    let loggedInUser = null
    if(localStorage.getItem("loggedInUser")){
      let user = JSON.parse(localStorage.getItem("loggedInUser"))
      loggedInUser = this.createLoggedInUserFromResponse(user)
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

  public setLoggedInUser(response) : void {
    let loggedInUser = this.createLoggedInUserFromResponse(response)
    this.currentUserSubject.next(loggedInUser)
  }

  public getLoggedInUser() : LoogedInUser{
    return this.currentUserSubject.value
  }

  login(email : string, password : string) : Promise<any>{
    let data = { email: email, password : password}
    return this.http.post<any>(ApiPaths.getApiPath("login", undefined), data).toPromise()
  }

  logout(){
    localStorage.clear()
    this.currentUserSubject.next(null)
  }

  forgetPassword(email : string) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath("forgetPassword", undefined), {email : email}).toPromise()
  }
}
