import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  accomplishmentForm : FormGroup
  constructor() { }

  ngOnInit() {

    this.accomplishmentForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'accomplishmentDate' : new FormControl(null, [Validators.required])
    })
  }

  

}
