import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_model/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  loading = false
  upadtePasswordForm : FormGroup
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.upadtePasswordForm = new FormGroup({
      'password' : new FormControl(null,[Validators.required]),
      'confirmPassword' : new FormControl(null,[Validators.required])
    })
  }

  updatePassword(){
    let data = { password : this.upadtePasswordForm.get('password').value }
    this.loading = true
    this.userService.updateUser(data).then(
      response => {
        console.log(response)
        this.upadtePasswordForm.reset()
      }
    ).catch(
      error => { console.log(error) }
    ).finally( () => { this.loading = false })
  }

}
