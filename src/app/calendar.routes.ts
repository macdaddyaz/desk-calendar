import {CalendarComponent} from './calendar/calendar.component';
import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';

export const CalendarRoutes: Routes = [
  {
    path: ':year/:month',
    component: CalendarComponent
  },
  {
    path: '',
    component: IndexComponent
  }
];
