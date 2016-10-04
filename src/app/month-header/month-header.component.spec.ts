/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { MonthHeaderComponent } from './month-header.component';
import {CalendarService} from '../calendar.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

let component: MonthHeaderComponent;
let fixture: ComponentFixture<MonthHeaderComponent>;
let debugElement: DebugElement;
let monthYearHeaderElement: HTMLElement;

let stubCalendarService = {
};

describe('Component: MonthHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthHeaderComponent],
      providers: [{provide: CalendarService, useValue: stubCalendarService}]
    });

    fixture = TestBed.createComponent(MonthHeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h1.month-year-header'));
    monthYearHeaderElement = debugElement.nativeElement;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(monthYearHeaderElement).toBeTruthy();
  });

  it('should show the month and year from the CalendarService', () => {
    let calendarService = fixture.debugElement.injector.get(CalendarService);
    calendarService.year = () => {
      return 2011;
    };
    calendarService.monthName = () => {
      return 'May';
    };

    fixture.detectChanges();
    expect(component.month).toEqual('May');
    expect(component.year).toEqual(2011);
    expect(monthYearHeaderElement.textContent).toEqual('May 2011');
  });
});
