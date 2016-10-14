import {CalendarComponent} from './calendar/calendar.component';

export const CalendarRoutes = [
  {
    path: ':year/:month',
    component: CalendarComponent
  },
  {
    path: '',
    component: CalendarComponent
  }
];
