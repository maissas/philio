import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  warning(msg) {
    this._snackBar.open(msg, 'fermer', {
      horizontalPosition: "start",
      verticalPosition:  "bottom",
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }

  info(msg) {
    this._snackBar.open(msg, 'fermer', {
      horizontalPosition: "start",
      verticalPosition:  "bottom",
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }

}
