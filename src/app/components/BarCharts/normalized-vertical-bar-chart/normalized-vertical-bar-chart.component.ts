import { Component, OnInit } from '@angular/core';
import { multi } from '../../../data/data';

@Component({
  selector: 'app-normalized-vertical-bar-chart',
  templateUrl: './normalized-vertical-bar-chart.component.html',
  styleUrls: ['./normalized-vertical-bar-chart.component.scss']
})
export class NormalizedVerticalBarChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {multi})   
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}