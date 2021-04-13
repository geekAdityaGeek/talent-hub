import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiPaths } from 'src/assets/apiPaths';
import { Connection } from '../_model/connection';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }

  private getUserDataFromRegistrationForm(registerForm : FormGroup) : User{
    let user : User = new User()
    user.name = registerForm.get('name').value
    user.email = registerForm.get('email').value
    user.password = registerForm.get('pass').value
    user.dob = registerForm.get('dob').value
    return user
  }

  public formConnection(response : any) : Connection{
    let connection : Connection = new Connection()
    connection.id = response._id
    connection.name = response.name 
    connection.email = response.email
    connection.profilePicUrl = response.profilePicUrl
    connection.following = response.following;
    return connection

  }

  public registerUser(registerForm : FormGroup) : Promise<any>{
    let user = this.getUserDataFromRegistrationForm(registerForm)
    return this.http.post<any>(ApiPaths.getApiPath("registerUser", undefined), user).toPromise()
  }

  public searchConnections(searchString : string) : Promise<any> {
    return this.http.get<any>(ApiPaths.getApiPath("searchConnections", searchString)).toPromise()
  }

  public unfollow(userId : string) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath("unfollow", userId), null).toPromise()
  }

  public follow(userId : string) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath("follow", userId), null).toPromise()
  }
}
