import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private year: number;
  private month: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
    this.year = yearParam ? +yearParam : this.calendarService.currentYear;
    this.updateCalendar();
  }

  private updateMonthFromParam(monthParam: string) {
    this.month = monthParam ? +monthParam - 1 : this.calendarService.currentMonth;
    console.log(`monthParam = ${monthParam}, month = ${this.month}`);
    this.updateCalendar();
  }

  private updateCalendar(): void {
    this.calendarService.init(this.year, this.month);
  }
}
