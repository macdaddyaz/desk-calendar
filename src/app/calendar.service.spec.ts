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

    expect(service.month()).toEqual(8);
    expect(service.year()).toEqual(2016);
    expect(service.monthName()).toEqual('September');

    service.init(2014, 2);

    expect(service.month()).toEqual(2);
    expect(service.year()).toEqual(2014);
    expect(service.monthName()).toEqual('March');
  });

  it('should initialize with the current getMonth and year', () => {
    service.init();

    let now = new Date();
    expect(service.month()).toEqual(now.getMonth());
    expect(service.year()).toEqual(now.getFullYear());

    // Only set year, not getMonth
    service.init(2014);
    // Should default whole date
    expect(service.month()).toEqual(now.getMonth());
    expect(service.year()).toEqual(now.getFullYear());
  });

  it('should generate a 2-dimensional array of days for the current getMonth and year', () => {
    // Test September 2016
    service.init(2016, 8);
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
