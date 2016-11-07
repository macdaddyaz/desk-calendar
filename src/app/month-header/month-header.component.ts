import {Component, OnInit} from '@angular/core';
import {CalendarService, YearAndMonth} from '../calendar.service';

@Component({
  selector: 'cal-month-header',
  templateUrl: './month-header.component.html',
  styleUrls: ['./month-header.component.css']
})
export class MonthHeaderComponent implements OnInit {
  month: string = null;
  year: number = Number.MIN_SAFE_INTEGER;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.updateFromCalendar();
  }

  private updateFromCalendar() {
    this.year = this.calendarService.year;
    this.month = this.calendarService.monthName;
  }
}
