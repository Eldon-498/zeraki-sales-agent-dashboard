import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { InvoiceService } from '../../services/invoice-service/invoice.service';
import * as InvoiceActions from '../actions/invoice-actions/invoice.actions';

@Injectable()
export class InvoiceEffects {
  constructor(private actions$: Actions, private invoiceService: InvoiceService) {}

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.loadInvoices),
      mergeMap(() =>
        this.invoiceService.getInvoices().pipe(
          map(invoices => InvoiceActions.loadInvoicesSuccess({ invoices })),
          catchError(error => of(InvoiceActions.loadInvoicesFailure({ error })))
        )
      )
    )
  );

  addInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.addInvoice),
      mergeMap(action =>
        this.invoiceService.addInvoice(action.invoice).pipe(
          map(invoice => InvoiceActions.addInvoiceSuccess({ invoice })),
          catchError(error => of(InvoiceActions.addInvoiceFailure({ error })))
        )
      )
    )
  );

  updateInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.updateInvoice),
      switchMap(action =>
        this.invoiceService.updateInvoice(action.invoice).pipe(
          map(invoice => InvoiceActions.updateInvoiceSuccess({ invoice })),
          catchError(error => of(InvoiceActions.updateInvoiceFailure({ error })))
        )
      )
    )
  );

}
