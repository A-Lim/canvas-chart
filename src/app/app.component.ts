import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chart-canvas';

  @ViewChild('chart', { static: true })
  chart!: ChartComponent;

  public primaryXAxis = {
    valueType: 'Category'
  };

  public chartData = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];

  export() {
    console.log(this.chart);
    this.chart.exportModule.export('PDF', 'test');
  }
}
