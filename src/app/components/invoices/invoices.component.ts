import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Invoice} from "../../interfaces/invoice";
import {Store} from "@ngrx/store";
import {selectUpcomingInvoices} from "../../store/selectors/invoice.selectors";
import {loadInvoices} from "../../store/actions/invoice.actions";
import {AppState} from "../../store/app.state";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    TableComponentComponent,
    AsyncPipe,
    EffectsModule,
    HttpClientModule,
    NgIf,
  ],
  providers:[HttpClientModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  columns: { name: string; key: string }[] = [
    { name: 'School Name', key: 'item' },
    { name: 'Amount Due', key: 'amount' },
    { name: 'Due Date', key: 'dueDate' }
  ];
  invoices$: Observable<Invoice[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadInvoices());
    this.invoices$ = this.store.select(selectUpcomingInvoices);
    console.log('Action dispatched');
    console.log(this.invoices$);

  }
  ngOnInit(): void {
    this.invoices$.subscribe(data => {
      console.log('Invoices Data:', data); // Should log an array of invoices
    });
  }

}
