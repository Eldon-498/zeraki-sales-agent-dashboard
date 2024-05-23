import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ButtonComponentComponent} from "../button-component/button-component.component";

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
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  onEdit(item: any) {
    
  }

  onCreate(item: any) {
    
  }

  onDelete(item: any) {
    
  }
}
