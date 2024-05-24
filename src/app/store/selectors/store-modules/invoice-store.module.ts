import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {InvoiceEffects} from "../../effects/invoice.effects";
import {invoiceReducer} from "../../reducers/invoice.reducers";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('invoices', invoiceReducer),
    EffectsModule.forFeature([InvoiceEffects])
  ]
})
export class InvoiceStoreModule { }
