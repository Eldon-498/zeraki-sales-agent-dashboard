import {InvoiceState} from "./reducers/invoice.reducers";
import {CollectionState} from "./reducers/collection.reducers";
import {SchoolState} from "./reducers/school.reducers";

export interface AppState {
  invoices: InvoiceState;
  collections: CollectionState;
  // signups: SignupState;
  schools: SchoolState;
}
