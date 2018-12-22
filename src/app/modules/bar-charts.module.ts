import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { VerticalBarChartComponent } from '../components/BarCharts/vertical-bar-chart/vertical-bar-chart.component';
import { HorizontalBarChartComponent } from '../components/BarCharts/horizontal-bar-chart/horizontal-bar-chart.component';
import { GroupedVerticalBarChartComponent } from '../components/BarCharts/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { GroupedHorizontalBarChartComponent } from '../components/BarCharts/grouped-horizontal-bar-chart/grouped-horizontal-bar-chart.component';
import { StackedVerticalBarChartComponent } from '../components/BarCharts/stacked-vertical-bar-chart/stacked-vertical-bar-chart.component';
import { StackedHorizontalBarChartComponent } from '../components/BarCharts/stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component';
import { NormalizedVerticalBarChartComponent } from '../components/BarCharts/normalized-vertical-bar-chart/normalized-vertical-bar-chart.component';
import { NormalizedHorizontalBarChartComponent } from '../components/BarCharts/normalized-horizontal-bar-chart/normalized-horizontal-bar-chart.component';

@NgModule({
  declarations: [
    VerticalBarChartComponent,
    HorizontalBarChartComponent,
    GroupedVerticalBarChartComponent,
    GroupedHorizontalBarChartComponent,
    StackedVerticalBarChartComponent,
    StackedHorizontalBarChartComponent,
    NormalizedVerticalBarChartComponent,
    NormalizedHorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
  exports: [
    VerticalBarChartComponent,
    HorizontalBarChartComponent,
    GroupedVerticalBarChartComponent,
    GroupedHorizontalBarChartComponent,
    StackedVerticalBarChartComponent,
    StackedHorizontalBarChartComponent,
    NormalizedVerticalBarChartComponent,
    NormalizedHorizontalBarChartComponent
  ]
})
export class BarChartsModule { }
