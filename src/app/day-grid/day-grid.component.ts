import {Component, DoCheck} from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'cal-day-grid',
  templateUrl: './day-grid.component.html',
  styleUrls: ['day-grid.component.scss']
})
export class DayGridComponent implements DoCheck {
  daysOfWeek: string[];
  daysOfMonth: number[][];

  constructor(private calendarService: CalendarService) {
  }

  ngDoCheck() {
    this.daysOfWeek = this.calendarService.daysOfWeek;
    this.daysOfMonth = this.calendarService.daysOfMonth;
  }
}
