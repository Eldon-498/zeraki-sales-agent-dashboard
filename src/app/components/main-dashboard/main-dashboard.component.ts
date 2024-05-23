import { Component } from '@angular/core';
import {DashboardHeaderComponent} from "../dashboard-header/dashboard-header.component";
import {SidenavComponent} from "../side-nav/sidenav.component";
import {RouterOutlet} from "@angular/router";
import {SchoolsComponent} from "../schools/schools.component";
import {PieChartComponent} from "../../shared/pie-chart/pie-chart.component";

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    DashboardHeaderComponent,
    SidenavComponent,
    SchoolsComponent,
    PieChartComponent,
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {
  totalCollections: number = 0;
  totalSignups: number = 0;
  signupsAnalytics: number = 0;
  signupsFinance: number = 0;
  signupsTimetable: number = 0;
  totalRevenue: number = 0;
  revenueAnalytics: number = 0;
  revenueFinance: number = 0;
  revenueTimetable: number = 0;
  bouncedCheques: number = 0;
  public analyticsPieChartData: number[] = [300, 500];
  public financePieChartData: number[] = [200, 800];
  public timetablePieChartData: number[] = [600, 400];
}
