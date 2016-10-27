/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IndexComponent} from './index.component';
import {Router} from '@angular/router';
import {CalendarService} from '../calendar.service';

class MockRouter {
  navigate = jasmine.createSpy('navigate').and.returnValue(null);
}

class MockCalendar {
  init = jasmine.createSpy('init');
}

describe('Component: Index', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent],
      providers: [
        {provide: CalendarService, useClass: MockCalendar},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the calendar to default values and route to the current year/month', () => {
    let calendarService = fixture.debugElement.injector.get(CalendarService);
    // Initialize to June 2016
    calendarService.year = 2016;
    calendarService.month = 5;
    let router = fixture.debugElement.injector.get(Router);

    fixture.detectChanges();
    expect(calendarService.init).toHaveBeenCalledWith();
    expect(router.navigate).toHaveBeenCalledWith(['/', 2016, 6]);
  });
});
