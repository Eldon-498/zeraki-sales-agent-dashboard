import { Routes } from '@angular/router';
import { SchoolsComponent } from './components/schools/schools.component';
import {MainDashboardComponent} from "./components/main-dashboard/main-dashboard.component";



export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'schools', component: SchoolsComponent }
];
