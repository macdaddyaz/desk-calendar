/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IndexComponent} from './index.component';
import {Router} from '@angular/router';
import {CalendarService, yearAndMonth, currentMonth} from '../calendar.service';

class MockRouter {
  navigate = jasmine.createSpy('navigate').and.returnValue(null);
}

class MockCalendar {
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

  it('should route to the current year/month', () => {
    let currentMonth = spyOn(component, 'currentMonth').and.returnValue(yearAndMonth(2016, 6));
    let router = fixture.debugElement.injector.get(Router);

    fixture.detectChanges();
    expect(currentMonth).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/', 2016, 6]);
  });
});
