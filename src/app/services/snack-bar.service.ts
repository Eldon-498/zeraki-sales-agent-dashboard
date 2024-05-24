import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SnackbarType} from "../enums/UtilEnums";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor() { }

  private _message$ = new BehaviorSubject<string | null>(null)
  private _snackbarType$ = new BehaviorSubject<SnackbarType | null>(null)

  public snackbarEvent = new EventEmitter<any>()

  getMessage(): BehaviorSubject<string | null> {
    return this._message$
  }

  getSnackbarType(): BehaviorSubject<SnackbarType | null> {
    return this._snackbarType$
  }

  setMessage(message: string | null): void {
    this._message$.next(message)
  }

  setSnackbarType(type: SnackbarType | null): void {
    this._snackbarType$.next(type)
  }

  resetSnackbar(): void {
    this.setMessage(null)
    this.setSnackbarType(null)
  }
}
