import {CalendarComponent} from './calendar/calendar.component';

export const CalendarRoutes = [
  {
    path: ':year',
    component: CalendarComponent,
    children: [
      {
        path: ':month',
        component: CalendarComponent
      }
    ]
  },
  {
    path: '',
    component: CalendarComponent
  }
];
