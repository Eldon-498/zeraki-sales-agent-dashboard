import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css'
})
export class ButtonComponentComponent {
  @Output() editClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() createClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter<void>();

  onEdit(): void {
    this.editClicked.emit();
  }

onCreate(): void {
  this.createClicked.emit();
}

onDelete(): void {
  this.deleteClicked.emit();
}
}
