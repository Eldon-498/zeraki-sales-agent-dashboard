import { createReducer, on } from '@ngrx/store';
import { Invoice } from '../../interfaces/invoice'
import * as InvoiceActions from '../actions/invoice.actions'

export interface InvoiceState {
  invoices: Invoice[];
  error: any;
}

export const initialState: InvoiceState = {
  invoices: [] ,
  error: null
};

export const invoiceReducer = createReducer(
  initialState,
  on(InvoiceActions.loadInvoicesSuccess, (state, { invoices }) => {
    console.log('loadInvoices action received:',invoices);
    const newState = {
      ...state,
      invoices
    };
    console.log('loadInvoicesSuccess action:', { invoices });
    console.log('New state after loadInvoicesSuccess:', newState);
    return newState;
  }),
  on(InvoiceActions.loadInvoicesFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(InvoiceActions.addInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    invoices: [...state.invoices, invoice]
  })),
  on(InvoiceActions.addInvoiceFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(InvoiceActions.updateInvoiceSuccess, (state, { invoice }) => ({
    ...state,
    invoices: state.invoices.map(inv => inv.id === invoice.id ? invoice : inv)
  })),
  on(InvoiceActions.updateInvoiceFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(InvoiceActions.deleteInvoiceSuccess, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter(inv => inv.id !== id)
  })),
  on(InvoiceActions.deleteInvoiceFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
