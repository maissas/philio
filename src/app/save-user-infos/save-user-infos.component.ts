import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SnackbarService} from "../SnackbarService/snackbar.service";
import {ApiService} from "../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-user-infos',
  templateUrl: './save-user-infos.component.html',
  styleUrls: ['./save-user-infos.component.css']
})
export class SaveUserInfosComponent implements OnInit {

  formSignUp: FormGroup;
  constructor(private fb: FormBuilder,
              private snackbarService: SnackbarService,
              private api : ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      nomClient: ['', Validators.required],
      prenomClient: ['', Validators.required],
      adresse: ['', Validators.required],
      ancienneActSportive: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      //imgProfil: ['', Validators.required],
      //extraitNaissance: [''],
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

  register() {
    if (this.formSignUp.valid) {
      console.log("form is valid")
      /*
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
         ormData.set("travailMere", this.formSignUp.value.travailMere)

           //files
           /*if (this.formSignUp.value.imgProfil) {
             formData.set("imgProfil", this.formSignUp.value.imgProfil, this.formSignUp.value.imgProfil.name)
             formData.set("imgProfilPath", "imgProfil" + "-" + this.formSignUp.value.imgProfil.name)
           }
           if (this.formSignUp.value.extraitNaissance){
             formData.set("extraitNaissance", this.formSignUp.value.extraitNaissance, this.formSignUp.value.extraitNaissance.name)
             formData.set("extraitNaissancePath",  "extraitNaissance" + "-" + this.formSignUp.value.extraitNaissance.name)
           }
          // Display the key/value pairs
      console.log(formData.get("imgProfil"))
      console.log(formData.get("nomClient"))
      */
      //'http://127.0.0.1:8080/uploads/'

      console.log(this.formSignUp.value)
      //save in database
      this.api.create(this.formSignUp.value)
        .subscribe(
          response => {
            console.log("response");
            console.log(response);
            this.snackbarService.info("Félicitations, vous êtes inscrit avec succès !")
            this.router.navigate(['/user']);

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
