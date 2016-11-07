/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MonthNavigationComponent} from './month-navigation.component';
import {yearAndMonth} from '../calendar.service';
import {Router} from '@angular/router';
import createSpy = jasmine.createSpy;
import createSpyObj = jasmine.createSpyObj;

let routerStub = {
  navigate: () => {
  }
};

describe('Component: MonthNavigation', () => {
  let component: MonthNavigationComponent;
  let fixture: ComponentFixture<MonthNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthNavigationComponent],
      providers: [
        {provide: Router, useValue: routerStub}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MonthNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when the listener is invoked', () => {
    let router = fixture.debugElement.injector.get(Router);
    router.navigate = createSpy('Router.navigate spy');
    component.navigateTo = yearAndMonth(2016, 11);
    component.navClicked();
    expect(router.navigate).toHaveBeenCalledWith(['/', 2016, 11]);
  });
});
