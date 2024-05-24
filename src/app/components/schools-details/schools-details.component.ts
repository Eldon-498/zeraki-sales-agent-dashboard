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
import {School} from "../../interfaces/school";
import {selectAllSchools} from "../../store/selectors/school.selectors";
import {addSchool, deleteSchool, loadSchools, updateSchool} from "../../store/actions/school.actions";

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
    { name: 'School Name', key: 'name' },
    { name: 'School Type', key: 'type' },
    { name: 'County', key: 'county' },
    { name: 'Registration Date', key: 'registrationDate' },
    { name: 'Contact', key: 'contact' },
    { name: 'Product Name', key: 'productName' }
  ];

  formFields: FormField[] = [
    { name: 'name', label: 'School Name', type: 'text', value: '', validators: [] },
    {
      name: 'type',
      label: 'School Type',
      type: 'select',
      value: null,
      validators: [],
      options: [
        { value: 'Primary', label: 'Primary' },
        { value: 'Secondary', label: 'Secondary' },
        { value: 'IGCSE', label: 'IGCSE' }
      ]
    },
    { name: 'county', label: 'County', type: 'text', value: '', validators: [] },
    { name: 'registrationDate', label: 'Registration Date', type: 'date', value: null, validators: [] },
    { name: 'contact', label: 'Contact', type: 'text', value: '', validators: [] },
    { name: 'productName',label: 'Product Name',type: 'select',value: null, validators: [],
      options: [
        { value: 'Zeraki Analytics', label: 'Zeraki Analytics' },
        { value: 'Zeraki Finance', label: 'Zeraki Finance' },
        { value: 'Zeraki Timetable', label: 'Zeraki Timetable' }
      ]
    }
  ];
  showModal = false;
  modalMode: 'add' | 'edit' | 'confirm' = 'add';
  modalData: any = {};
  schools$: Observable<School[]>;

  constructor(private store: Store<AppState>, private snackBarService: SnackBarService) {
    this.store.dispatch(loadSchools());
    this.schools$ = this.store.select(selectAllSchools);
  }
  ngOnInit(): void {
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
        this.store.dispatch(addSchool({ school: data }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Added Successfully');
        break;
      case 'edit':
        const updatedInvoice = { ...this.modalData, ...data };
        this.store.dispatch(updateSchool({ school: updatedInvoice }));
        this.snackBarService.setSnackbarType(SnackbarType.SUCCESS);
        this.snackBarService.setMessage('Invoice Updated Successfully');
        break;
      case 'confirm':
        console.log(this.modalData.id)
        this.store.dispatch(deleteSchool({ id: this.modalData.id }));
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
