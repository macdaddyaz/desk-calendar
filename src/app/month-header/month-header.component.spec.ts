/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {MonthHeaderComponent} from './month-header.component';
import {CalendarService} from '../calendar.service';
import {By} from '@angular/platform-browser';

let component: MonthHeaderComponent;
let fixture: ComponentFixture<MonthHeaderComponent>;
let monthYearHeaderElement: HTMLElement;

let stubCalendarService = {};

describe('Component: MonthHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthHeaderComponent],
      providers: [{provide: CalendarService, useValue: stubCalendarService}]
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
    expect(monthYearHeaderElement.textContent).toEqual('May 2011');
  });
});
