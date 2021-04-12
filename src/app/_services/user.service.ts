import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiPaths } from 'src/assets/apiPaths';
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

  public registerUser(registerForm : FormGroup) : Promise<any>{
    let user = this.getUserDataFromRegistrationForm(registerForm)
    return this.http.post<any>(ApiPaths.getApiPath("registerUser", undefined), user).toPromise()
  }
}
