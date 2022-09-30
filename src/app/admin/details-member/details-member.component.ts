import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-details-member',
  templateUrl: './details-member.component.html',
  styleUrls: ['./details-member.component.css']
})
export class DetailsMemberComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private api : ApiService
  ) { }

  ngOnInit(): void {
  }

}
