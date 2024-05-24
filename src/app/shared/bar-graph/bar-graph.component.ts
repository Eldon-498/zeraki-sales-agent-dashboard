import {Component, Input, SimpleChanges} from '@angular/core';
import {Chart, ChartData, ChartEvent, ChartOptions, ChartType, registerables} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css'
})
export class BarGraphComponent {
  @Input() data: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };
  @Input() label: string = '';
  constructor() {
    Chart.register(...registerables);
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.formattedValue;
            return `${label}: ${value} signups`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartColors: Array<any> = [
    { backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'] },
     ];

  public chartClicked(event: { event?: ChartEvent; active?: object[] }): void {
    console.log('Chart clicked:', event);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Data changed:', this.data);
    }
  }


}
