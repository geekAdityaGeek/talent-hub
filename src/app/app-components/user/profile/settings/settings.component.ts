import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertMessage } from 'src/assets/alertMessage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  loading = false
  upadtePasswordForm : FormGroup
  constructor(private userService : UserService,
    private alertService : AlertService) { }

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
        this.alertService.generateAlert(AlertMessage.getAletMessage("updatePasswordSuccess"))
        this.upadtePasswordForm.reset()
      }
    ).catch(
      error => { 
        this.alertService.generateAlert(AlertMessage.getAletMessage("updatePasswordError"))
       }
    ).finally( () => { this.loading = false })
  }

}
