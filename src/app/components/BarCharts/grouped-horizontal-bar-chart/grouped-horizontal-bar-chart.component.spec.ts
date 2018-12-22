import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedHorizontalBarChartComponent } from './grouped-horizontal-bar-chart.component';

describe('GroupedHorizontalBarChartComponent', () => {
  let component: GroupedHorizontalBarChartComponent;
  let fixture: ComponentFixture<GroupedHorizontalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedHorizontalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedHorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
