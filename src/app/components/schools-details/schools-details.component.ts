import {Component, ViewChild} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {ModalComponentComponent} from "../../shared/modal-component/modal-component.component";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {FormField} from "../../interfaces/form-field";
import {Observable} from "rxjs";
import {Invoice} from "../../interfaces/invoice";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {SnackBarService} from "../../services/snack-bar.service";
import {addInvoice, deleteInvoice, loadInvoices, updateInvoice} from "../../store/actions/invoice.actions";
import {selectUpcomingInvoices} from "../../store/selectors/invoice.selectors";
import {SnackbarType} from "../../enums/UtilEnums";

@Component({
  selector: 'app-schools-details',
  standalone: true,
  imports: [
    AsyncPipe,
    ModalComponentComponent,
    NgIf,
    SnackBarComponent,
    TableComponentComponent
  ],
  templateUrl: './schools-details.component.html',
  styleUrl: './schools-details.component.css'
})
export class SchoolsDetailsComponent {
  columns: { name: string; key: string }[] = [
    { name: 'ID', key: 'id' },
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
        this.store.dispatch(addInvoice({ invoice: data }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Added Successfully');
        break;
      case 'edit':
        const updatedInvoice = { ...this.modalData, ...data };
        this.store.dispatch(updateInvoice({ invoice: updatedInvoice }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Updated Successfully');
        break;
      case 'confirm':
        console.log(this.modalData.id)
        this.store.dispatch(deleteInvoice({ id: this.modalData.id }));
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
