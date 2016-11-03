/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MonthNavigationComponent} from './month-navigation.component';
import {yearAndMonth} from '../calendar.service';
import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;

describe('Component: MonthNavigation', () => {
  let component: MonthNavigationComponent;
  let fixture: ComponentFixture<MonthNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthNavigationComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MonthNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when the listener is invoked', () => {
    component.navigateTo = yearAndMonth(2016, 11);
    let listener = createSpy('navigationHandler');
    component.navigationTriggered.subscribe(listener);
    component.navClicked();
    expect(listener).toHaveBeenCalledWith({navigationTarget: component.navigateTo});
  });
});
