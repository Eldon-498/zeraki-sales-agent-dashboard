import {Component, ViewChild} from '@angular/core';
import {FormField} from "../../interfaces/form-field";
import {Observable} from "rxjs";
import {Invoice} from "../../interfaces/invoice";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {SnackBarService} from "../../services/snack-bar.service";
import {addInvoice, deleteInvoice, loadInvoices, updateInvoice} from "../../store/actions/invoice.actions";
import {ModalComponentComponent} from "../../shared/modal-component/modal-component.component";
import {SnackbarType} from "../../enums/UtilEnums";
import {AsyncPipe, NgIf} from "@angular/common";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {loadCollections} from "../../store/actions/collection.actions";
import {selectAllCollections, selectCollectionState} from "../../store/selectors/collection.selectors";
import {Collection} from "../../interfaces/collection";


@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    AsyncPipe,
    ModalComponentComponent,
    NgIf,
    SnackBarComponent,
    TableComponentComponent
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  columns: { name: string; key: string }[] = [
    { name: 'Invoice Number', key: 'invoiceNumber' },
    { name: 'Amount', key: 'amount' },
    { name: 'Date', key: 'date' },
    { name: 'Collect Number', key: 'collectNumber' },
    { name: 'Status', key: 'status' }
  ];

  formFields: FormField[] = [
    { name: 'invoiceNumber', label: 'Invoice Number', type: 'number', value: null, validators: [] },
    { name: 'amount', label: 'Amount', type: 'number', value: null, validators: [] },
    { name: 'date', label: 'Date', type: 'date', value: null, validators: [] },
    { name: 'collectNumber', label: 'Collect Number', type: 'number', value: null, validators: [] },
    { name: 'status', label: 'Status', type: 'select', value: 'Valid', validators: [], options: ['Valid', 'Bounced'] }
  ];

  showModal = false;
  modalMode: 'add' | 'edit' | 'confirm' = 'add';
  modalData: any = {};
  collections$: Observable<Collection[]>;

  constructor(private store: Store<AppState>, private snackBarService: SnackBarService) {
    this.store.dispatch(loadCollections());
    this.collections$ = this.store.select(selectAllCollections);
  }
  ngOnInit(): void {
    this.collections$.subscribe(data => {
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
