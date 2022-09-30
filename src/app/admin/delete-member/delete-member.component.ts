import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Membre } from "../../models/membre";

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent implements OnInit {

  memberName
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private api : ApiService
  ) { }

  ngOnInit(): void {
    this.memberName = this.data.membre.prenomClient
  }

  onConfirm(): void {
    console.log("onConfirm delete member")
    console.log(this.data.membre._id)
    this.api.delete(this.data.membre._id).subscribe({
      next:(res)=>{
        console.log(res)
        //this.snackbarService.info("Patient supprimé avec succès")
        //this.updateService.updateTable("Update Patient")
      },
      error:(err)=>{
        console.log(err)
        //this.snackbarService.warning("La suppression du patient a échoué ")
      }
    })
  }

}
