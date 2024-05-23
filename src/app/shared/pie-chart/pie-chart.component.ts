import {Component, Input, SimpleChanges} from '@angular/core';
import {
  ArcElement,
  Chart,
  ChartData,
  ChartDataset,
  ChartOptions,
  ChartType, Legend,
  PieController, Tooltip,
  TooltipItem
} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
Chart.register(PieController, ArcElement, Tooltip, Legend);


@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  @Input() data: number[] = [];
  @Input() label: string = '';

  public pieChartLabels: string[] = ['Target Achieved', 'Target Remaining'];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'pie'>) => {
            const dataset = tooltipItem.dataset;
            const value = dataset.data[tooltipItem.dataIndex];
            return `${value} signups`;
          }
        }
      }
    }
  };

  public pieChartColors: any[] = [
    {backgroundColor: ['#36A2EB', '#FF6384']}
  ];

  public pieChartType: ChartType = 'pie';

  public pieChartData: ChartData<'pie'> = this.transformData();

  private transformData(): ChartData<'pie'> {
    return {
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#36A2EB', '#FF6384']
        }
      ]
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updateChartData();
    }
  }

  private updateChartData(): void {
    this.pieChartData = {
      labels: this.pieChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#36A2EB', '#FF6384']
        }
      ]
    };
  }
}
