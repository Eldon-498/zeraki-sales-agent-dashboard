import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ButtonComponentComponent} from "../button-component/button-component.component";
import {ColumnDefinition} from "../../interfaces/column-definition";

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [
    NgForOf,
    ButtonComponentComponent
  ],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  @Input() columns: ColumnDefinition[] = [];
  @Input() data: any[] | null = [];
  @Output() editClicked = new EventEmitter<any>();
  @Output() createClicked = new EventEmitter<any>();
  @Output() deleteClicked = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Table data input:', this.data); // Log the data input to confirm receipt
    }
  }

  onEdit(item: any) {
    this.editClicked.emit(item);
  }

  onCreate(item: any) {
  this.createClicked.emit(item);
  }

  onDelete(item: any) {
    this.deleteClicked.emit(item);
  }
}
