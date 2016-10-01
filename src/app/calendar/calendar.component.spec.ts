/* tslint:disable:no-unused-variable */

import {TestBed} from '@angular/core/testing';
import {CalendarComponent} from './calendar.component';
import {CalendarService} from '../calendar.service';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {MonthComponent} from '../month/month.component';
import {DayComponent} from '../day/day.component';

// stub CalendarService
const calendarServiceStub = {};

describe('Component: Calendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthComponent, DayComponent],
      providers: [{provide: CalendarService, useValue: calendarServiceStub}]
    });
  });

  it('should create an instance', () => {
    let component = TestBed.createComponent(CalendarComponent);
    expect(component).toBeTruthy();
  });
});
