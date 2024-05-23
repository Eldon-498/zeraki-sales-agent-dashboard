import {Component, Input} from '@angular/core';
import {Tooltip, TooltipItem} from "chart.js";


@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  @Input() data: number[] = [];
  @Input() label: string = '';

  public pieChartLabels: string[] = ['Target Achieved', 'Target Remaining'];

  public pieChartOptions: any = {
    responsive: true,
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: (tooltipItem:TooltipItem<any>, data:any) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.datasetIndex];
          return `${value} signups`;
        }
      }
    }
  };

  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#36A2EB', '#FF6384']
    }
  ];
}
