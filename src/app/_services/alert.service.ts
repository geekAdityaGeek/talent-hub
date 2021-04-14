import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../_components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) { }

  public generateAlert(data : any){
    this.dialog.open(AlertComponent)
  }
}
