import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiPaths } from 'src/assets/apiPaths';
import { AccomplishmentsComponent } from '../app-components/user/profile/accomplishments/accomplishments.component';
import { Accomplishment } from '../_model/accomplishment';
import { Connection } from '../_model/connection';
import { UploadPost } from '../_model/uploadPost';
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

  public formAccomplishmentFromResponse(response : any) : Accomplishment{
    let accomplishment : Accomplishment = new Accomplishment()
    accomplishment.id = response._id
    accomplishment.title = response.title
    accomplishment.description = response.description
    accomplishment.date = response.date
    return accomplishment
  }

  public formUserFromResponse(response) : User{
    let user : User = new User()
    user.id = response._id
    user.name = response.name
    user.email = response.email
    user.dob = response.dob
    user.addressLine1 = response.addressLine1
    user.state = response.state
    user.country = response.country
    user.mobileNumber = response.mobileNumber
    user.domain_ids = response.domain_ids
    user.accomplishments = new Array<Accomplishment>()
    for(let idx in response.accomplishments ){
      user.accomplishments.push(this.formAccomplishmentFromResponse(response.accomplishments))
    } 
     
    return user

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

  public searchFolloweeConnections(){
    return this.http.get<any>(ApiPaths.getApiPath("getFollowees",undefined)).toPromise()
  }

  public searchFollowerConnections(){
    return this.http.get<any>(ApiPaths.getApiPath("getFollowers",undefined)).toPromise()
  }

  public updateUser(data : any) : Promise<any> {
    return this.http.patch<any>(ApiPaths.getApiPath("updateUser", undefined), data).toPromise()
  }

  public getUserDetails() : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("getUserDetails", undefined)).toPromise()
  }

  public getUserInterests() : Promise<any>{
    return this.http.get<any>(ApiPaths.getApiPath("getUserInterests", undefined)).toPromise()
  }

  public fileUpload(formData : FormData) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath("fileUpload", undefined), formData).toPromise()
  }

  public uploadPost(data : UploadPost) : Promise<any>{
    return this.http.post<any>(ApiPaths.getApiPath("uploadPost", undefined), data).toPromise()
  }
}
