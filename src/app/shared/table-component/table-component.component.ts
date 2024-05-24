import {Component, Input, SimpleChanges} from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Table data input:', this.data); // Log the data input to confirm receipt
    }
  }

  onEdit(item: any) {

  }

  onCreate(item: any) {

  }

  onDelete(item: any) {

  }
}
