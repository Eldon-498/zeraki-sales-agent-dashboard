import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string = '';
  @Input() dynamicInputs: any = {};

  onClose(): void {
    this.closeModal.emit();
  }

  submitForm() {

  }
}
