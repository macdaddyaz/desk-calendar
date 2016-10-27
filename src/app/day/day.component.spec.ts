/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DayComponent} from './day.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {MonthComponent} from '../month/month.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {CalendarTestModule} from '../test/dummy/calendar-test.module';

let component: DayComponent;
let fixture: ComponentFixture<DayComponent>;

describe('Component: Day', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthComponent, DayComponent],
      imports: [CalendarTestModule]
    });

    fixture = TestBed.createComponent(DayComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should show the day of month as a number', () => {
    component.dayOfMonth = 4;
    fixture.detectChanges();
    let dayOfMonthDebug: DebugElement = fixture.debugElement.query(By.css('.day-of-month-val'));
    expect(dayOfMonthDebug).not.toBeNull();
    expect(dayOfMonthDebug.nativeElement.textContent).toEqual('4');
  });

  it('should show nothing when day of month is null', () => {
    component.dayOfMonth = null;
    fixture.detectChanges();
    let dayOfMonthDebug: DebugElement = fixture.debugElement.query(By.css('.day-of-month-val'));
    expect(dayOfMonthDebug).not.toBeNull();
    expect(dayOfMonthDebug.nativeElement.textContent).toEqual('');
  });
});
