import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertMessage } from 'src/assets/alertMessage';
import { AlertComponent } from '../_components/alert/alert.component';
import { Alert } from '../_model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) { }

  public generateAlert(data : Alert){
    let config : MatDialogConfig = new MatDialogConfig()
    config.data = data
    config.disableClose = true
    this.dialog.open(AlertComponent, config)
  }
}
