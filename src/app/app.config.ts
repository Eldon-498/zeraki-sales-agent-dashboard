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
import {collectionReducer} from "./store/reducers/collection.reducers";
import {schoolReducer} from "./store/reducers/school.reducers";
import {CollectionsEffects} from "./store/effects/collection.effects";
import {SchoolEffects} from "./store/effects/school.effects";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideStore([invoiceReducer, collectionReducer, schoolReducer]),
    provideHttpClient(),
    provideEffects([InvoiceEffects, CollectionsEffects, SchoolEffects]),
    provideState('invoices', invoiceReducer, ),
    provideState('collections', collectionReducer),
    provideState('schools', schoolReducer),
  ],
};
