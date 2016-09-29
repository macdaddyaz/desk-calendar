import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CalendarComponent } from './calendar/calendar.component';
import { MonthHeaderComponent } from './month-header/month-header.component';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    CalendarComponent,
    MonthHeaderComponent,
    MonthComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [CalendarComponent]
})
export class AppModule { }
