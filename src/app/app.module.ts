import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryService, ChartModule, DataLabelService, ExportService, LegendService, LineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, ExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
