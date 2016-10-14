import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-month-header',
  templateUrl: './month-header.component.html',
  styleUrls: ['./month-header.component.css']
})
export class MonthHeaderComponent implements OnInit {
  month = null;
  year = Number.MIN_SAFE_INTEGER;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.year = this.calendarService.year;
    this.month = this.calendarService.monthName;
  }
}
