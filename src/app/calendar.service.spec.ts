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

  it('should initialize with the given month and year', () => {
    service.init(2016, 8);

    expect(service.getMonth()).toEqual(8);
    expect(service.getYear()).toEqual(2016);
    expect(service.getMonthName()).toEqual('September');

    service.init(2014, 2);

    expect(service.getMonth()).toEqual(2);
    expect(service.getYear()).toEqual(2014);
    expect(service.getMonthName()).toEqual('March');
  });

  it('should initialize with the current month and year', () => {
    service.init();

    let now = new Date();
    expect(service.getMonth()).toEqual(now.getMonth());
    expect(service.getYear()).toEqual(now.getFullYear());

    // Only set year, not month
    service.init(2014);
    // Should default whole date
    expect(service.getMonth()).toEqual(now.getMonth());
    expect(service.getYear()).toEqual(now.getFullYear());
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
