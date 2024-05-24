import {Component, Inject} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {BehaviorSubject, zip} from "rxjs";
import { SnackbarType } from '../../enums/UtilEnums';
import {SnackBarService} from "../../services/snack-bar.service";
import {DOCUMENT, NgForOf, NgIf} from "@angular/common";
import {SnackbarMessage} from "../../interfaces/snack-bar";

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '0.4s ease-out',
          style({ transform: 'translateX(0)', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(
          '0.7s ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 }),
        ),
      ]),
    ]),
  ],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css'
})
export class SnackBarComponent {
  SnackbarType = SnackbarType

  private messageSubject = new BehaviorSubject<string | null>(null)
  private typeSubject = new BehaviorSubject<SnackbarType | null>(null)

  message$ = this.messageSubject.asObservable()
  type$ = this.typeSubject.asObservable()

  constructor(
    private snackbarService: SnackBarService,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.snackbarService.getMessage().subscribe((message) => {
      this.messageSubject.next(message)
    })

    this.snackbarService.getSnackbarType().subscribe((type) => {
      this.typeSubject.next(type)
    })

    zip(this.message$, this.type$).subscribe(([message, type]) => {
      this.showSnackbar(message, type)
    })
  }

  snackbarMessages: SnackbarMessage[] = []

  showSnackbar(message: string | null, type: string | null) {
    if (message !== null && type !== null) {
      const snackbarMessage: SnackbarMessage = {
        message,
        type,
        isOpen: true,
      }

      this.snackbarMessages.push(snackbarMessage)

      if (type !== SnackbarType.UPDATE) {
        setTimeout(() => {
          this.closeSnackbar(snackbarMessage)
        }, 10000)
      }
    }
  }

  closeSnackbar(snackbarMessage: SnackbarMessage) {
    if (snackbarMessage.type !== SnackbarType.UPDATE) {
      snackbarMessage.isOpen = false

      setTimeout(() => {
        this.snackbarMessages = this.snackbarMessages.filter(
          (m) => m.isOpen === true,
        )
        this.snackbarService.resetSnackbar()
      }, 2000)
    } else {
      this.snackbarService.snackbarEvent.emit()
    }
  }


}
