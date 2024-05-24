import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormField} from "../../interfaces/form-field";

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent {
  @Input() showModal: boolean = false;
  @Input() mode: 'add' | 'edit' | 'confirm' = 'add';
  @Input() data: any = {};
  @Input() formFields: FormField[] = [];
  confirmationMode: boolean = false;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges() {
    this.buildForm();
  }

  buildForm() {
    const group: any = {};
    this.formFields.forEach(field => {
      group[field.name] = [this.data[field.name] || '', field.validators || []]; // Use this.data[field.name]
    });
    this.form = this.fb.group(group);
  }

  confirmSubmit(){
      this.confirmationMode = true;
  }

  submitForm() {
   if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
   this.confirmationMode = false;
  }

  closeConfirmationContent() {
    this.confirmationMode = false;
  }

  closeForm(){
    this.onClose.emit();
    this.confirmationMode = false;
  }
}
