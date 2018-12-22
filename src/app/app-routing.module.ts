import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalBarChartComponent } from './components/BarCharts/vertical-bar-chart/vertical-bar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: VerticalBarChartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
