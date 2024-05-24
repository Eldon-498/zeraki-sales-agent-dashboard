import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {invoiceReducer} from "./reducers/invoice.reducers";
import {InvoiceStoreModule} from "./selectors/store-modules/invoice-store.module";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  imports: [
    EffectsModule.forRoot([]),
    InvoiceStoreModule
  ],
  exports: [StoreModule]
})
export class AppStore {}
