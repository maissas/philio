import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cloudinary} from "@cloudinary/url-gen";
import {CloudinaryModule} from '@cloudinary/ng';
import {CloudinaryImage} from '@cloudinary/url-gen';
import {URLConfig} from '@cloudinary/url-gen';
import {CloudConfig} from '@cloudinary/url-gen';

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

  cld
  imgProfile: CloudinaryImage;
  imgExtrait: CloudinaryImage;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Create a Cloudinary instance, setting some Cloud and URL configuration parameters.
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dptwusdqw'
      },
      url: {
        secureDistribution: 'https://philiotennis.com',
        secure: true
      }
    });

    // The URL of the image is: https://philiotennis.com/dptwusdqw/image/upload/sample
    this.imgExtrait = this.cld.image('members/extrait');

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
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload/members/profile", formData)
      .subscribe(
      response => {
        console.log("response");
        console.log(response);
      },
      error => {
        console.log("error");
        console.log(error);
      });

    formData.append('file', this.fileInputExtrait);
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload/members/extrait", formData)
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
