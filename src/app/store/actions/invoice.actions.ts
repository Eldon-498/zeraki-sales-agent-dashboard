import {Invoice} from "../../interfaces/invoice";
import {createAction, props} from "@ngrx/store";


export const loadInvoices = createAction('[Invoice] Load Invoices');
export const loadInvoicesSuccess = createAction('[Invoice] Load Invoices Success', props<{ invoices: Invoice[] }>());
export const loadInvoicesFailure = createAction('[Invoice] Load Invoices Failure', props<{ error: any }>());

export const addInvoice = createAction('[Invoice] Add Invoice', props<{ invoice: Invoice }>());
export const addInvoiceSuccess = createAction('[Invoice] Add Invoice Success', props<{ invoice: Invoice }>());
export const addInvoiceFailure = createAction('[Invoice] Add Invoice Failure', props<{ error: any }>());

export const updateInvoice = createAction('[Invoice] Update Invoice', props<{ invoice: Invoice }>());
export const updateInvoiceSuccess = createAction('[Invoice] Update Invoice Success', props<{ invoice: Invoice }>());
export const updateInvoiceFailure = createAction('[Invoice] Update Invoice Failure', props<{ error: any }>());

export const deleteInvoice = createAction('[Invoice] Delete Invoice', props<{ id: number }>());
export const deleteInvoiceSuccess = createAction('[Invoice] Delete Invoice Success', props<{ id: number }>());
export const deleteInvoiceFailure = createAction('[Invoice] Delete Invoice Failure', props<{ error: any }>());
