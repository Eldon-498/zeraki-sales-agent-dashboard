import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainDashboardComponent} from "./components/main-dashboard/main-dashboard.component";
import {DashboardHeaderComponent} from "./components/dashboard-header/dashboard-header.component";
import {SidenavComponent} from "./components/side-nav/sidenav.component";
import {SchoolsComponent} from "./components/schools/schools.component";
import {initFlowbite} from "flowbite";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,MainDashboardComponent, DashboardHeaderComponent, SidenavComponent, SchoolsComponent],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zeraki-sales-agent-dashboard';
  ngOnInit(): void {
    initFlowbite();
  }
}
