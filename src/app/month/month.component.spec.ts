/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {MonthComponent} from './month.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {DayComponent} from '../day/day.component';
import {CalendarService} from '../calendar.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

let component: MonthComponent;
let fixture: ComponentFixture<MonthComponent>;

// stub CalendarService
const calendarServiceStub = {};

describe('Component: Month', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthComponent, DayComponent],
      providers: [{provide: CalendarService, useValue: calendarServiceStub}]
    });

    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should label the days of the week', () => {
    let weekdayRowDebug: DebugElement = fixture.debugElement.query(By.css('tr#weekday-labels'));
    let weekdaysDebug: DebugElement[] = weekdayRowDebug.children;
    expect(weekdaysDebug.length).toEqual(7);
    expect(weekdaysDebug[0].nativeElement.textContent).toEqual('Sun');
    expect(weekdaysDebug[1].nativeElement.textContent).toEqual('Mon');
    expect(weekdaysDebug[2].nativeElement.textContent).toEqual('Tue');
    expect(weekdaysDebug[3].nativeElement.textContent).toEqual('Wed');
    expect(weekdaysDebug[4].nativeElement.textContent).toEqual('Thu');
    expect(weekdaysDebug[5].nativeElement.textContent).toEqual('Fri');
    expect(weekdaysDebug[6].nativeElement.textContent).toEqual('Sat');
  });

  it('should create 6 rows and 42 day cells', () => {
    let calendarService: CalendarService = fixture.debugElement.injector.get(CalendarService);
    // set up a structure that looks like a real month
    calendarService.daysOfMonth = () => {
      return [[null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null]
        ];
    };
    fixture.detectChanges();
    let monthRowsDebug: DebugElement[] = fixture.debugElement.queryAll(By.css('tr.week'));
    expect(monthRowsDebug.length).toEqual(6);
    monthRowsDebug.forEach((rowDebug: DebugElement, index: number) => {
      let daysDebug: DebugElement[] = rowDebug.queryAll(By.css('td.day'));
      expect(daysDebug.length).toEqual(7);
    });
  });

  it('should initialize the day components with the day from the calendar', () => {
    let calendarService: CalendarService = fixture.debugElement.injector.get(CalendarService);
    calendarService.daysOfMonth = () => {
      return [[null, 1, 2, 3], [10, 20, 30, 40], [100, 200, null, null]];
    };
    fixture.detectChanges();
    let dayCompsDebug: DebugElement[] = fixture.debugElement.queryAll(By.directive(DayComponent));
    expect(dayCompsDebug[0].componentInstance.dayOfMonth).toBeNull();
    expect(dayCompsDebug[1].componentInstance.dayOfMonth).toEqual(1);
    expect(dayCompsDebug[6].componentInstance.dayOfMonth).toEqual(30);
    expect(dayCompsDebug[9].componentInstance.dayOfMonth).toEqual(200);
    expect(dayCompsDebug[11].componentInstance.dayOfMonth).toBeNull();
  });
});
