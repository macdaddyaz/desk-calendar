import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CalendarRoutes} from './calendar.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(CalendarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CalendarRoutingModule {
}
