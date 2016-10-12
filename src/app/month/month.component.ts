import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  daysOfWeek: string[];
  daysOfMonth: number[][];

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.daysOfWeek = this.calendarService.daysOfWeek();
    this.daysOfMonth = this.calendarService.daysOfMonth();
  }
}
