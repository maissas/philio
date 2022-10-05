import {Component, OnInit, ViewChild} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  selectImageProfile($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      const file = (event.target as HTMLInputElement).files[0];
      //this.formSignUp.patchValue({ imgProfil: file });
    } else {
      console.log("there is No ImgProfil image !!")
    }
  }

  selectExtraitNaissance($event){
    if ((event.target as HTMLInputElement).files.length > 0){
      const file = (event.target as HTMLInputElement).files[0];
      //this.formSignUp.patchValue({ extraitNaissance: file });
    } else {
      console.log("there is No extraitNaissance image !!")
    }

  }

}