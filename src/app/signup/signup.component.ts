import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { ApiService } from "../api/api.service"
import { SnackbarService } from '../SnackbarService/snackbar.service';
import { Router } from '@angular/router';

declare var require: any
const moment = require('moment');

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}

}

