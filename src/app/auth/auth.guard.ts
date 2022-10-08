import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): boolean {
    if (!localStorage.getItem("USERINFOSSAVED")) {
      this.router.navigate(['signup/saveUserInfos']);
      return false;
    }
    return true;
  }


}
