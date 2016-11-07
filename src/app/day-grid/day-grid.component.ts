import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'cal-day-grid',
  templateUrl: './day-grid.component.html',
  styleUrls: ['./day-grid.component.css']
})
export class DayGridComponent implements OnInit {
  daysOfWeek: string[];
  daysOfMonth: number[][];

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.daysOfWeek = this.calendarService.daysOfWeek;
    this.daysOfMonth = this.calendarService.daysOfMonth;
  }
}
