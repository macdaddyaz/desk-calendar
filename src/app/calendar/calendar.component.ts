import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {CalendarService, yearAndMonth, YearAndMonth} from '../calendar.service';

@Component({
  selector: 'cal-desk-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  nextMonth: YearAndMonth;
  previousMonth: YearAndMonth;
  private year: number;
  private month: number;

  constructor(private route: ActivatedRoute,
              private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(params => <string>params['year']))
      .subscribe(year => this.updateYearFromParam(year));
    this.route.params.pipe(
      map(params => <string>params['month']))
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
