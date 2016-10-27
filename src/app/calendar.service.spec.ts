/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {CalendarService} from './calendar.service';

describe('Object: Calendar', () => {
  let service: CalendarService;

  beforeEach(() => {
    service = new CalendarService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with the given getMonth and year', () => {
    service.init(2016, 8);

    expect(service.month).toEqual(8);
    expect(service.year).toEqual(2016);
    expect(service.monthName).toEqual('September');

    service.init(2014, 2);

    expect(service.month).toEqual(2);
    expect(service.year).toEqual(2014);
    expect(service.monthName).toEqual('March');
  });

  it('should initialize with the current month and year', () => {
    service.init();

    let now = new Date();
    expect(service.month).toEqual(now.getMonth());
    expect(service.year).toEqual(now.getFullYear());
  });

  it('should default the month to current if not provided', () => {
    service.init(2014);
    let now = new Date();
    expect(service.month).toEqual(now.getMonth());
    expect(service.year).toEqual(2014);
  });

  it('should default the year to current if not provided', () => {
    service.init(null, 2);
    let now = new Date();
    expect(service.month).toEqual(2);
    expect(service.year).toEqual(now.getFullYear());
  });

  it('should allow January as a valid month', () => {
    service.init(2016, 0);
    expect(service.month).toEqual(0);
    expect(service.year).toEqual(2016);
  });

  it('should generate a 2-dimensional array of days for the current month and year', () => {
    // Test September 2016
    service.init(2016, 8);

    let days = service.daysOfMonth;
    expect(days.length).toEqual(6);
    days.forEach((item) => {
      expect(item.length).toEqual(7);
    });
  });

  it('should fill in the days in the right order', () => {
    // Test September 2016
    service.init(2016, 8);

    let days = service.daysOfMonth;
    expect(days[0][0]).toBeNull();
    expect(days[0][4]).toEqual(1);
    expect(days[2][6]).toEqual(17);
    expect(days[3][1]).toEqual(19);
    expect(days[4][5]).toEqual(30);
    expect(days[4][6]).toBeNull();
    expect(days[5][6]).toBeNull();
  });

  it('should recaclulate the days after changing the month and year', () => {
    service.init(2016, 8);
    let days = service.daysOfMonth;
    expect(days[0][4]).toEqual(1);
    expect(days[4][5]).toEqual(30);

    service.init(2016, 9);
    days = service.daysOfMonth;
    expect(days[0][6]).toEqual(1);
    expect(days[5][1]).toEqual(31);
  });

  it('should report the correct days of the week', () => {
    let daysOfWeek: string[] = service.daysOfWeek;
    expect(daysOfWeek.length).toEqual(7);
    expect(daysOfWeek[0]).toEqual('Sun');
    expect(daysOfWeek[1]).toEqual('Mon');
    expect(daysOfWeek[2]).toEqual('Tue');
    expect(daysOfWeek[3]).toEqual('Wed');
    expect(daysOfWeek[4]).toEqual('Thu');
    expect(daysOfWeek[5]).toEqual('Fri');
    expect(daysOfWeek[6]).toEqual('Sat');
  });

  it('should calculate the next month within the same year', () => {
    // Start in October 2016
    service.init(2016, 9);
    let {year, month} = service.calculateNextMonth();
    expect(year).toEqual(2016);
    expect(month).toEqual(10);
  });

  it('should calculate the next month across year boundaries', () => {
    // Try December 2016 (boundary check)
    service.init(2016, 11);
    let {year, month} = service.calculateNextMonth();
    expect(year).toEqual(2017);
    expect(month).toEqual(0);
  });

  it('should calculate the previous month within the same year', () => {
    // Start in October 2016
    service.init(2016, 9);
    let {year, month} = service.calculatePreviousMonth();
    expect(year).toEqual(2016);
    expect(month).toEqual(8);
  });

  it('should calculate the previous month across year boundaries', () => {
    // Try January 2016 (boundary check)
    service.init(2016, 0);
    let {year, month} = service.calculatePreviousMonth();
    expect(year).toEqual(2015);
    expect(month).toEqual(11);
  });
});

describe('Service: Calendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService]
    });
  });

  it('should be injectable', inject([CalendarService], (service: CalendarService) => {
    expect(service).toBeTruthy();
  }));
});
