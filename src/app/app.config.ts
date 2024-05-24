import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {InvoiceStoreModule} from "./store/selectors/store-modules/invoice-store.module";
import {InvoiceEffects} from "./store/effects/invoice.effects";
import {provideHttpClient} from "@angular/common/http";
import {invoiceReducer} from "./store/reducers/invoice.reducers";
import {selectInvoiceState} from "./store/selectors/invoice.selectors";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideStore([invoiceReducer]),
    provideHttpClient(),
    provideEffects([InvoiceEffects]),
    provideState('invoices', invoiceReducer)
  ],
};
