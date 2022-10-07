import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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
  constructor(private http: HttpClient) { }

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
    formData.append('file', this.fileInputExtrait);
    formData.append('upload_preset', "maissasaied");
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload", formData)
      .subscribe(
      response => {
        console.log("response");
        console.log(response);
      },
      error => {
        console.log("error");
        console.log(error);
      });

  }
}
