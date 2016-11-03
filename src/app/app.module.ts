import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CalendarComponent} from './calendar/calendar.component';
import {MonthHeaderComponent} from './month-header/month-header.component';
import {MonthComponent} from './month/month.component';
import {DayComponent} from './day/day.component';
import {CalendarService} from './calendar.service';
import {CalendarRoutingModule} from './calendar-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import { MonthNavigationComponent } from './month-navigation/month-navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarRoutingModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    IndexComponent,
    MonthHeaderComponent,
    MonthComponent,
    DayComponent,
    MonthNavigationComponent
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
