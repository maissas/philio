import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, CanActivate} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./auth/auth.guard";
import {SaveImageProfileComponent} from "./save-image-profile/save-image-profile.component";
import {SaveUserInfosComponent} from "./save-user-infos/save-user-infos.component";


const appRoutes: Routes = [
  { path: '', pathMatch : 'full', redirectTo: 'signup' }, //no route
  { path: 'signup', component: SignupComponent,
    children: [
      {
        path:'',
        redirectTo: 'saveUserInfos',
        pathMatch: 'full'
      },
      {
        path:'saveUserInfos', component: SaveUserInfosComponent
      },
      {
        path:'saveImageProfile', component: SaveImageProfileComponent
      }
    ]},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m)=> m.AdminModule),
  }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(appRoutes, {enableTracing: true})],
    CommonModule
  ]
})
export class AppRoutingModule { }
