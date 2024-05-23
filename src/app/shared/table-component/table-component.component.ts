import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}
