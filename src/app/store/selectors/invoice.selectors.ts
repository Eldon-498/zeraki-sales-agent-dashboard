import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState } from '../reducers/invoice.reducers';
import {Invoice} from "../../interfaces/invoice";

export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);

export const selectInvoiceError = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.error
);
export const selectUpcomingInvoices = createSelector(
  selectAllInvoices,
  (invoices: Invoice[]) => invoices.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
);
