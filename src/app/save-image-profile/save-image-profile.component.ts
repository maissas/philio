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
  formSignUp: FormGroup;
  fileInput
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  selectImageProfile($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      console.log((event.target as HTMLInputElement).files[0])
      //const fileInput = this.readFile((event.target as HTMLInputElement).files[0]);
      const fileInput = (event.target as HTMLInputElement).files[0];

      //this.formSignUp.patchValue({ imgProfil: file });
    } else {
      console.log("there is No ImgProfil image !!")
    }
  }

  /*
  selectExtraitNaissance($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      const file = this.readFile((event.target as HTMLInputElement).files[0]);
      //this.formSignUp.patchValue({ extraitNaissance: file });
    } else {
      console.log("there is No extraitNaissance image !!")
    }

  }

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
    formData.append('file', this.fileInput);
    formData.append('upload_preset', "wtfvrxqs");
    this.http.post("https://api.cloudinary.com/v1_1/dptwusdqw/upload", formData)

  }
}
