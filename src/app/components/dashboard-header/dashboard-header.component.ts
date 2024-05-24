import { Component } from '@angular/core';
import theme from "tailwindcss/defaultTheme";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {

  protected readonly theme = 'light';

}
