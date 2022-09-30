import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';

import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {DeleteMemberComponent } from './delete-member/delete-member.component';
import {MatIconModule} from "@angular/material/icon";

import {AdminRoutingModule} from "./admin-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { DetailsMemberComponent } from './details-member/details-member.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';

function AngularMaterialModule() {

}

@NgModule({
  declarations: [
    MembersListComponent,
    DeleteMemberComponent,
    EditMemberComponent,
    DetailsMemberComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,

    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class AdminModule { }
