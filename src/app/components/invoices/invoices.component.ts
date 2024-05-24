import {Component, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Invoice} from "../../interfaces/invoice";
import {Store} from "@ngrx/store";
import {selectUpcomingInvoices} from "../../store/selectors/invoice.selectors";
import {addInvoice, deleteInvoice, loadInvoices} from "../../store/actions/invoice.actions";
import {AppState} from "../../store/app.state";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {ModalComponentComponent} from "../../shared/modal-component/modal-component.component";
import {FormField} from "../../interfaces/form-field";

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    TableComponentComponent,
    AsyncPipe,
    EffectsModule,
    HttpClientModule,
    NgIf,
    ModalComponentComponent,
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
  formFields: FormField[] = [
    { name: 'item', label: 'School Name', type: 'text', value: '', validators: [] },
    { name: 'amount', label: 'Amount Due', type: 'number', value: null, validators: [] },
    { name: 'dueDate', label: 'Due Date', type: 'date', value: null, validators: [] }
  ];

  showModal = false;
  modalMode: 'add' | 'edit' | 'confirm' = 'add';
  modalData: any = {};
  invoices$: Observable<Invoice[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadInvoices());
    this.invoices$ = this.store.select(selectUpcomingInvoices);
    console.log('Action dispatched');
    console.log(this.invoices$);

  }
  ngOnInit(): void {
    this.invoices$.subscribe(data => {
      console.log('Invoices Data:', data);
    });
  }
  onEditClicked(item: any) {
    this.modalMode = 'edit';
    this.modalData = item;
    this.showModal = true;
  }

  onCreateClicked() {
    this.modalMode = 'add';
    this.modalData = {};
    this.showModal = true;
  }

  onDeleteClicked(item: any) {
    this.modalMode = 'confirm';
    this.modalData = item;
    this.showModal = true;
  }
  @ViewChild(ModalComponentComponent) modalComponent?: ModalComponentComponent;

  onModalSubmit(data: any) {

    console.log('Modal submitted data:', data);
    this.showModal = false;
    // Dispatch actions based on the modal mode
  }

  onModalClose() {
    this.showModal = false;
  }

}
