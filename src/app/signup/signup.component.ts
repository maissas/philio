import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { ApiService } from "../api/api.service"
import { SnackbarService } from '../SnackbarService/snackbar.service';

declare var require: any
const moment = require('moment');

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('fileInputExtraitNaissance')
  fileInputExtraitNaissance;

  @ViewChild('fileInputImageProfile')
  fileInputImageProfile;

  formSignUp: FormGroup;

  fileExtraitNaissance: File | null = null;
  fileImageProfile: File | null = null;

  imageData: string;


  constructor(private fb: FormBuilder,
              private snackbarService: SnackbarService,
              private api : ApiService ) {}

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      nomClient: ['', Validators.required],
      prenomClient: ['', Validators.required],
      adresse: ['', Validators.required],
      ancienneActSportive: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      imgProfil: ['', Validators.required],
      extraitNaissance: [''],
      nomPere: ['', Validators.required],
      prenomPere: ['', Validators.required],
      emailPere: ['', Validators.required],
      numTelPere: ['', Validators.required],
      travailPere: ['', Validators.required],
      nomMere: ['', Validators.required],
      prenomMere: ['', Validators.required],
      emailMere: ['', Validators.required],
      numTelMere: ['', Validators.required],
      travailMere: ['', Validators.required]
    });

  }

  selectImageProfile($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      const file = (event.target as HTMLInputElement).files[0];
      this.formSignUp.patchValue({ imgProfil: file });
    } else {
      console.log("there is No ImgProfil image !!")
    }
  }

  selectExtraitNaissance($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      const file = (event.target as HTMLInputElement).files[0];
      this.formSignUp.patchValue({ extraitNaissance: file });
    } else {
      console.log("there is No extraitNaissance image !!")
    }

  }

  register() {
    if (this.formSignUp.valid) {
      console.log("form is valid")

      this.formSignUp.value.dateNaissance = moment(this.formSignUp.value.dateOfBirth).format('MM-DD-YYYY')
      const formData = new FormData();
      formData.set("nomClient", this.formSignUp.value.nomClient)
      formData.set("prenomClient", this.formSignUp.value.prenomClient)
      formData.set("adresse", this.formSignUp.value.adresse)
      formData.set("ancienneActSportive", this.formSignUp.value.ancienneActSportive)
      formData.set("dateNaissance", this.formSignUp.value.dateNaissance)
      formData.set("nomPere", this.formSignUp.value.nomPere)
      formData.set("prenomPere", this.formSignUp.value.prenomPere)
      formData.set("emailPere", this.formSignUp.value.emailPere)
      formData.set("numTelPere", this.formSignUp.value.numTelPere)
      formData.set("travailPere", this.formSignUp.value.travailPere)
      formData.set("nomMere", this.formSignUp.value.nomMere)
      formData.set("prenomMere", this.formSignUp.value.prenomMere)
      formData.set("emailMere", this.formSignUp.value.emailMere)
      formData.set("numTelMere", this.formSignUp.value.numTelMere)
      formData.set("travailMere", this.formSignUp.value.travailMere)

      //files
      if (this.formSignUp.value.imgProfil) {
        formData.set("imgProfil", this.formSignUp.value.imgProfil, this.formSignUp.value.imgProfil.name)
        formData.set("imgProfilPath", "imgProfil" + "-" + this.formSignUp.value.imgProfil.name)
      }
      if (this.formSignUp.value.extraitNaissance){
        formData.set("extraitNaissance", this.formSignUp.value.extraitNaissance, this.formSignUp.value.extraitNaissance.name)
        formData.set("extraitNaissancePath",  "extraitNaissance" + "-" + this.formSignUp.value.extraitNaissance.name)
      }

      //'http://127.0.0.1:8080/uploads/'

      // Display the key/value pairs
      console.log(formData.get("imgProfil"))
      console.log(formData.get("nomClient"))

      //save in database
      this.api.create(formData)
        .subscribe(
          response => {
            console.log("response");
            console.log(response);
            this.snackbarService.info("Félicitations, vous êtes inscrit avec succès !")
          },
          error => {
            console.log("error");
            console.log(error);
          });
    } else {
      console.log("form not valid")
      this.snackbarService.warning("Veuillez remplir les champs nécessaires")
    }
  }
}

