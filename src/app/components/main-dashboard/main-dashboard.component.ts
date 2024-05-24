import { Component } from '@angular/core';
import {DashboardHeaderComponent} from "../dashboard-header/dashboard-header.component";
import {SidenavComponent} from "../side-nav/sidenav.component";
import {RouterOutlet} from "@angular/router";
import {SchoolsComponent} from "../schools/schools.component";
import {PieChartComponent} from "../../shared/pie-chart/pie-chart.component";
import {ChartData} from "chart.js";
import {BarGraphComponent} from "../../shared/bar-graph/bar-graph.component";
import {TableComponentComponent} from "../../shared/table-component/table-component.component";
import {InvoicesComponent} from "../invoices/invoices.component";
import {EffectsModule} from "@ngrx/effects";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    EffectsModule,
    InvoicesComponent,
    DashboardHeaderComponent,
    SidenavComponent,
    SchoolsComponent,
    PieChartComponent,
    BarGraphComponent,
    TableComponentComponent,
    InvoicesComponent,
    SnackBarComponent,
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
  public analyticsBarChartData: ChartData<'bar'> = {
    labels: ['Primary', 'Secondary', 'IGCSE'],
    datasets: [
      { data: [100, 200, 150], label: 'Zeraki Analytics' }
    ]
  };

  public financeBarChartData: ChartData<'bar'> = {
    labels: ['Primary', 'Secondary', 'IGCSE'],
    datasets: [
      { data: [80, 300, 120], label: 'Zeraki Finance' }
    ]
  };

  public timetableBarChartData: ChartData<'bar'> = {
    labels: ['Primary', 'Secondary', 'IGCSE'],
    datasets: [
      { data: [150, 180, 200], label: 'Zeraki Timetable' }
    ]
  };


}
