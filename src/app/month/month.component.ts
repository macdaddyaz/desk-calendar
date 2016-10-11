import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  daysOfMonth: number[][];

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.daysOfMonth = this.calendarService.daysOfMonth();
  }
}
