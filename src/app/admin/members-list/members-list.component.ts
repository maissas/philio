import {Component, OnInit, ViewChild} from '@angular/core';
import { Membre } from "../../models/membre";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DeleteMemberComponent} from "../delete-member/delete-member.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ApiService} from "../../api/api.service";
import {DetailsMemberComponent} from "../details-member/details-member.component";

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  displayedColumns: string[] =
    [
      'imgProfil',
      'nomClient' ,
      'dateNaissance' ,
      'numTelPere',
      'numTelMere',
      'action',
      /*, 'prenomClient', 'adresse', 'ancienneActSportive' ,'extraitNaissance''nomPere', 'prenomPere', 'emailPere', 'travailPere', 'nomMere', 'prenomMere', 'emailMere', 'travailMere',*/

    ];
  dataSource!: MatTableDataSource<Membre>;

  allElementslength: number

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  members: any;

  constructor(private dialog: MatDialog,
              private api : ApiService) { }

  ngOnInit(): void {
    this.retrieveMembers();
  }

  retrieveMembers(): void {
    this.api.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.members = data;
          this.dataSource = new MatTableDataSource(data['result']);

          //retrieve images
          /*for (let member = 0; member < data['result'].length; member++) {
            console.log(data['result'][member].imgProfilPath)
            this.api.getImgProfile(data['result'][member].imgProfilPath)
              .subscribe(
                data => {
                  console.log("getImgProfile");
                  console.log(data);

                },
                error => {
                  console.log(error);
                });
          }*/
        },
        error => {
          console.log(error);
        });
  }

  deleteMember(membre: any, i: number) {
    console.log("delete " + i)
    console.log(this.dataSource.data[i])

    this.dialog.open( DeleteMemberComponent , {
      width:'60%',
      data: { membre: membre }
    });
  }

  /*editMember(membre: Membre, i: number) {
    console.log("edit " + i)
    console.log(this.dataSource.data[i])
    this.dialog.open( DetailsMemberComponent , {
      width:'30%',
      data: { membre: membre }
    });
  }*/

  openMember(membre: any){
    this.dialog.open( DetailsMemberComponent , {
      width:'60%',
      data: { membre: membre }
    });
  }

  applyFilter(event: Event) { //(keyup)="applyFilter($event)"
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
