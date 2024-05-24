import { Component } from '@angular/core';
import {SchoolsDetailsComponent} from "../schools-details/schools-details.component";
import {CollectionsComponent} from "../collections/collections.component";

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [
    SchoolsDetailsComponent,
    CollectionsComponent
  ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {

}
