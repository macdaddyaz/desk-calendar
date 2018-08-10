/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DayComponent} from './day.component';
import {CalendarComponent} from '..';
import {MonthHeaderComponent} from '../month-header/month-header.component';
import {DayGridComponent} from '../day-grid/day-grid.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {CalendarTestModule} from '../test/dummy/calendar-test.module';
import {MonthNavigationComponent} from '../month-navigation/month-navigation.component';

let component: DayComponent;
let fixture: ComponentFixture<DayComponent>;

describe('Component: Day', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, MonthHeaderComponent, MonthNavigationComponent, DayGridComponent, DayComponent],
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
    const dayOfMonthDebug: DebugElement = fixture.debugElement.query(By.css('.day-of-month-val'));
    expect(dayOfMonthDebug).not.toBeNull();
    expect(dayOfMonthDebug.nativeElement.textContent).toEqual('4');
  });

  it('should force an invisible nbsp when day of month is null', () => {
    component.dayOfMonth = null;
    fixture.detectChanges();
    const dayOfMonthDebug: DebugElement = fixture.debugElement.query(By.css('.day-of-month'));
    expect(dayOfMonthDebug).not.toBeNull();
    // &nbsp; generates a character with hexcode 'a0'
    expect(dayOfMonthDebug.nativeElement.textContent).toEqual('\xa0');
  });
});
