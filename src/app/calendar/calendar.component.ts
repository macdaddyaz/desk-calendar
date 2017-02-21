import {Component, OnInit} from '@angular/core';
import {CalendarService, yearAndMonth, YearAndMonth} from '../calendar.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'cal-desk-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private year: number;
  private month: number;
  nextMonth: YearAndMonth;
  previousMonth: YearAndMonth;

  constructor(private route: ActivatedRoute,
              private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => <string>params['year'])
      .subscribe(year => this.updateYearFromParam(year));
    this.route.params
      .map(params => <string>params['month'])
      .subscribe(month => this.updateMonthFromParam(month));
  }

  private updateYearFromParam(yearParam: string) {
    this.year = +yearParam;
    this.updateCalendar();
  }

  private updateMonthFromParam(monthParam: string) {
    this.month = +monthParam;
    this.updateCalendar();
  }

  private updateCalendar(): void {
    this.calendarService.goTo(yearAndMonth(this.year, this.month));
    this.nextMonth = this.calendarService.nextMonth;
    this.previousMonth = this.calendarService.previousMonth;
  }
}
