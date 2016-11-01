/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {MonthHeaderComponent} from './month-header.component';
import {CalendarService, yearAndMonth} from '../calendar.service';
import {By} from '@angular/platform-browser';
import {CalendarTestModule} from '../test/dummy/calendar-test.module';

let component: MonthHeaderComponent;
let fixture: ComponentFixture<MonthHeaderComponent>;
let monthYearHeaderElement: HTMLElement;

const PREV_YEAR = 2010;
const PREV_MONTH = 4;
const NEXT_YEAR = 2020;
const NEXT_MONTH = 11;

let stubCalendarService = {
  nextMonth: yearAndMonth(NEXT_YEAR, NEXT_MONTH),
  previousMonth: yearAndMonth(PREV_YEAR, PREV_MONTH)
};

describe('Component: MonthHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthHeaderComponent],
      imports: [CalendarTestModule],
      providers: [
        {provide: CalendarService, useValue: stubCalendarService}
      ]
    });

    fixture = TestBed.createComponent(MonthHeaderComponent);
    component = fixture.componentInstance;
    monthYearHeaderElement = fixture.debugElement.query(By.css('h1.month-year-header')).nativeElement;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(monthYearHeaderElement).toBeTruthy();
  });

  it('should show the month and year from the CalendarService', () => {
    let calendarService = fixture.debugElement.injector.get(CalendarService);
    calendarService.year = 2011;
    calendarService.monthName = 'May';

    fixture.detectChanges();
    expect(component.month).toEqual('May');
    expect(component.year).toEqual(2011);
    expect(monthYearHeaderElement.textContent).toContain('May 2011');
  });

  it('should populate the next month values from the CalendarService', () => {
    let calendarService = fixture.debugElement.injector.get(CalendarService);
    calendarService.year = 2015;
    calendarService.monthName = 'June';

    fixture.detectChanges();
    expect(component.next.year).toEqual(NEXT_YEAR);
    expect(component.next.month).toEqual(NEXT_MONTH);
  });

  it('should populate the previous month values from the CalendarService', () => {
    let calendarService = fixture.debugElement.injector.get(CalendarService);
    calendarService.year = 2015;
    calendarService.monthName = 'June';

    fixture.detectChanges();
    expect(component.previous.year).toEqual(PREV_YEAR);
    expect(component.previous.month).toEqual(PREV_MONTH);
  });
});
