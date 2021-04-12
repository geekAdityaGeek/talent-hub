import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/assets/apiPaths';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  login(email : string, password : string){
    let data = { email: email, password : password}
    this.http.post<any>(ApiPaths.getApiPath("login", undefined), data).subscribe(
      (response) => {
        response.user.password = ""
        localStorage.setItem("logedInUser", response)
        return true
      },
      (error) => {
        return false
      }
    )
  }

  logout(){
    localStorage.clear()
  }
}
