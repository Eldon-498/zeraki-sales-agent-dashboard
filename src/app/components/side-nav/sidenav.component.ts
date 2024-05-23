import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../shared/material.module";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {MatExpansionPanel} from "@angular/material/expansion";
import {MatLine} from "@angular/material/core";


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  onSidenavOpen() {

  }

  onSidenavClose() {

  }
}
