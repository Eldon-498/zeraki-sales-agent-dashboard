import {Component, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Invoice} from "../../interfaces/invoice";
import {Store} from "@ngrx/store";
import {selectUpcomingInvoices} from "../../store/selectors/invoice.selectors";
import {addInvoice, deleteInvoice, loadInvoices, updateInvoice} from "../../store/actions/invoice.actions";
import {AppState} from "../../store/app.state";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {ModalComponentComponent} from "../../shared/modal-component/modal-component.component";
import {FormField} from "../../interfaces/form-field";
import {SnackBarService} from "../../services/snack-bar.service";
import {SnackbarType} from "../../enums/UtilEnums";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {addCollection, deleteCollection, updateCollection} from "../../store/actions/collection.actions";

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
    SnackBarComponent,
  ],
  providers:[HttpClientModule,SnackBarService],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  columns: { name: string; key: string }[] = [
    { name: 'ID', key: 'id' },
    { name: 'School Name', key: 'item' },
    { name: 'Amount Due', key: 'amount' },
    { name: 'Due Date', key: 'dueDate' }
  ];
   formFields: FormField[] = [
    { name: 'invoiceNumber', label: 'Invoice Number', type: 'number', value: undefined, validators: [] },
    { name: 'amount', label: 'Amount', type: 'number', value: undefined, validators: [] },
    { name: 'date', label: 'Date', type: 'date', value: undefined, validators: [] },
    { name: 'collectNumber', label: 'Collect Number', type: 'number', value: undefined, validators: [] },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      value: undefined,
      validators: [],
      options: [
        { label: 'Valid', value: 'Valid' },
        { label: 'Bounced', value: 'Bounced' }
      ],
    }
  ];

  showModal = false;
  modalMode: 'add' | 'edit' | 'confirm' = 'add';
  modalData: any = {};
  invoices$: Observable<Invoice[]>;

  constructor(private store: Store<AppState>, private snackBarService: SnackBarService) {
    this.store.dispatch(loadInvoices());
    this.invoices$ = this.store.select(selectUpcomingInvoices);
  }
  ngOnInit(): void {
    this.invoices$.subscribe(data => {
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
    switch (this.modalMode) {
      case 'add':
        this.store.dispatch(addCollection({ collection: data }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Added Successfully');
        break;
      case 'edit':
        const updatedCollection = { ...this.modalData, ...data };
        this.store.dispatch(updateCollection({ collection: updatedCollection }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Updated Successfully');
        break;
      case 'confirm':
        this.store.dispatch(deleteCollection({ id: this.modalData.id }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Deleted Successfully');
        break;
      default:
        break;
    }
    this.showModal = false;
  }

  onModalClose() {
    this.showModal = false;
  }

}
