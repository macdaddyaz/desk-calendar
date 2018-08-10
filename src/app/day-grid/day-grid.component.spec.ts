/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DayGridComponent} from './day-grid.component';
import {CalendarComponent} from '..';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {DayComponent} from '../day/day.component';
import {CalendarService} from '../calendar.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {CalendarTestModule} from '../test/dummy/calendar-test.module';
import {MonthNavigationComponent} from '../month-navigation/month-navigation.component';

let component: DayGridComponent;
let fixture: ComponentFixture<DayGridComponent>;

// stub CalendarService
const calendarServiceStub = {
  daysOfWeek: [],
  daysOfMonth: []
};

describe('Component: DayGrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthNavigationComponent, DayGridComponent, DayComponent],
      imports: [CalendarTestModule],
      providers: [{provide: CalendarService, useValue: calendarServiceStub}]
    });

    fixture = TestBed.createComponent(DayGridComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should label the days of the week using the calendar service', () => {
    const calendarService: typeof calendarServiceStub = fixture.debugElement.injector.get(CalendarService);
    const weekdays = ['Magic', 'Kareem', 'Shaq', 'Kobe'];
    calendarService.daysOfWeek = weekdays;
    fixture.detectChanges();

    const weekdayRowDebug: DebugElement = fixture.debugElement.query(By.css('div.weekday-headers'));
    const weekdaysDebug: DebugElement[] = weekdayRowDebug.children;
    expect(weekdaysDebug.length).toEqual(weekdays.length);
    weekdays.forEach((weekday, i) => expect(weekdaysDebug[i].nativeElement.textContent).toEqual(weekday));
  });

  it('should create 6 rows and 42 day cells', () => {
    const calendarService: typeof calendarServiceStub = fixture.debugElement.injector.get(CalendarService);
    // set up a structure that looks like a real month
    calendarService.daysOfMonth = [[null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null]
        ];
    fixture.detectChanges();

    const monthRowsDebug: DebugElement[] = fixture.debugElement.queryAll(By.css('div.weekdays'));
    expect(monthRowsDebug.length).toEqual(6);
    monthRowsDebug.forEach((rowDebug: DebugElement) => {
      const daysDebug: DebugElement[] = rowDebug.queryAll(By.css('div.weekday'));
      expect(daysDebug.length).toEqual(7);
    });
  });

  it('should initialize the day components with the day from the calendar', () => {
    const calendarService: typeof calendarServiceStub = fixture.debugElement.injector.get(CalendarService);
    calendarService.daysOfMonth = [[null, 1, 2, 3], [10, 20, 30, 40], [100, 200, null, null]];
    fixture.detectChanges();

    const dayCompsDebug: DebugElement[] = fixture.debugElement.queryAll(By.directive(DayComponent));
    expect(dayCompsDebug[0].componentInstance.dayOfMonth).toBeNull();
    expect(dayCompsDebug[1].componentInstance.dayOfMonth).toEqual(1);
    expect(dayCompsDebug[6].componentInstance.dayOfMonth).toEqual(30);
    expect(dayCompsDebug[9].componentInstance.dayOfMonth).toEqual(200);
    expect(dayCompsDebug[11].componentInstance.dayOfMonth).toBeNull();
  });
});
