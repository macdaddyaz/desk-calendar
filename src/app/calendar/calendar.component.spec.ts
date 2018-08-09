/* tslint:disable:no-unused-variable */

import {TestBed} from '@angular/core/testing';
import {CalendarComponent} from './calendar.component';
import {CalendarService} from '../calendar.service';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {DayGridComponent} from '../day-grid/day-grid.component';
import {DayComponent} from '../day/day.component';
import {ActivatedRoute} from '@angular/router';
import {CalendarTestModule} from '../test/dummy/calendar-test.module';
import {MonthNavigationComponent} from '../month-navigation/month-navigation.component';

// stub CalendarService
const calendarServiceStub = {};

describe('Component: Calendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthNavigationComponent, DayGridComponent, DayComponent],
      imports: [CalendarTestModule],
      providers: [
        {provide: CalendarService, useValue: calendarServiceStub},
        {provide: ActivatedRoute, useValue: {}}
      ]
    });
  });

  it('should create an instance', () => {
    const component = TestBed.createComponent(CalendarComponent);
    expect(component).toBeTruthy();
  });
});
