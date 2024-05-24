import {InvoiceState} from "./reducers/invoice.reducers";

export interface AppState {
  invoices: InvoiceState;
  // collections: CollectionState;
  // signups: SignupState;
  // schools: SchoolState;
}
