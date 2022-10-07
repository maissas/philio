import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api/api.service";
import {FormBuilder} from "@angular/forms";

class uploadResponse
{
  "asset_id": String;
  "public_id":String;
  "version": number;
  "version_id":String;
  "signature":String;
  "width":number;
  "height":number;
  "format":String;
  "resource_type":String;
  "created_at": String;
  "tags": Array<any>;
  "bytes": number;
  "type": String;
  "etag": String;
  "placeholder":boolean;
  "url": String;
  "secure_url": String;
  "folder": String;
  "access_mode": String;
  "original_filename": String;
}

@Component({
  selector: 'app-save-image-profile',
  templateUrl: './save-image-profile.component.html',
  styleUrls: ['./save-image-profile.component.css']
})
export class SaveImageProfileComponent implements OnInit {
 /*
  @ViewChild('fileInputExtraitNaissance')
  fileInputExtraitNaissance;
  @ViewChild('fileInputImageProfile')
  fileInputImageProfile;
  fileExtraitNaissance: File | null = null;
  fileImageProfile: File | null = null;
  imageData: string;
*/

  fileInputProfile
  fileInputExtrait

  data
  constructor(
              private api : ApiService,
              private http: HttpClient,
              private route: ActivatedRoute)
  {
    console.log("data")
    this.data = JSON.parse(this.route.snapshot.paramMap.get('data'))
    console.log(this.data)
  }

  ngOnInit(): void {

  }

  selectImageProfile($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      console.log((event.target as HTMLInputElement).files[0])
      //const fileInput = this.readFile((event.target as HTMLInputElement).files[0]);
      this.fileInputProfile = (event.target as HTMLInputElement).files[0];
    } else {
      console.log("there is No ImgProfil image !!")
    }
  }

  selectExtraitNaissance($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      console.log((event.target as HTMLInputElement).files[0])
      //const file = this.readFile((event.target as HTMLInputElement).files[0]);
      this.fileInputExtrait = (event.target as HTMLInputElement).files[0];
    } else {
      console.log("there is No extraitNaissance image !!")
    }

  }
/*
  readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  */

  register() {
    const formData = new FormData();
    formData.append('file', this.fileInputProfile);

    formData.append('upload_preset', "maissasaied");
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload", formData)
      .subscribe(
      response => {
        console.log("response");
        console.log((response as uploadResponse).secure_url);
      },
      error => {
        console.log("error");
        console.log(error);
      });

    formData.append('file', this.fileInputExtrait);
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload", formData)
      .subscribe(
        response => {
          console.log("response");
          console.log((response as uploadResponse).secure_url);
        },
        error => {
          console.log("error");
          console.log(error);
        });

    //add images url

    //save member in database
    /*this.api.create(this.formSignUp.value)
      .subscribe(
        response => {
          console.log("response");
          console.log(response);
          //this.snackbarService.info("Félicitations, vous êtes inscrit avec succès !")


        },
        error => {
          console.log("error");
          console.log(error);
        });*/
  }
}
