import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {isNullOrUndefined} from 'util';

@Injectable()
export class CalendarService {

  private _yearAndMonth: YearAndMonth;
  private _daysOfMonth: number[][] = null;

  private static emptyWeek(): number[] {
    return Array.of(null, null, null, null, null, null, null);
  }

  private static isEndOfWeek(dayOfWeek: number): boolean {
    return Math.floor(dayOfWeek / 7) === 1;
  }

  constructor() {
  }

  init(year?: number, month?: number): void {
    let theYear = isNullOrUndefined(year) ? this.currentYear : year;
    let theMonth = isNullOrUndefined(month) ? this.currentMonth : month;
    this._yearAndMonth = new YearAndMonth(theYear, theMonth);
    // Clear out the cached value so that it will be recalculated
    this._daysOfMonth = null;
  }

  calculateNextMonth(): YearAndMonth {
    let newMonth = moment().year(this.year).month(this.month).day(1).add(1, 'months');
    return new YearAndMonth(newMonth.year(), newMonth.month());
  }

  calculatePreviousMonth(): YearAndMonth {
    let newMonth = moment().year(this.year).month(this.month).day(1).add(-1, 'months');
    return new YearAndMonth(newMonth.year(), newMonth.month());
  }

  get currentYear(): number {
    return moment().year();
  }

  get currentMonth(): number {
    return moment().month();
  }

  get yearAndMonth(): YearAndMonth {
    return this._yearAndMonth;
  }

  get year(): number {
    return this._yearAndMonth.year;
  }

  get month(): number {
    return this._yearAndMonth.month;
  }

  get monthName(): string {
    return moment.months(this.month);
  }

  get daysOfMonth(): number[][] {
    if (this._daysOfMonth === null) {
      this._daysOfMonth = this.calculateDaysOfMonth();
    }
    return this._daysOfMonth;
  }

  get daysOfWeek(): string[] {
    return moment.weekdaysShort();
  }

  private calculateDaysOfMonth(): number[][] {
    const NUM_WEEK_ROWS = 6;
    let days = [];

    let firstDay = moment().year(this.year).month(this.month).startOf('month');
    let lastDay = moment().year(this.year).month(this.month).endOf('month');
    let numDays = lastDay.daysInMonth();
    let firstDayPos = firstDay.weekday();
    let row = 0;
    // initially offset the column to the day of week that the 1st falls on
    let col = firstDayPos;

    // initializing first row of grid
    days[row] = CalendarService.emptyWeek();
    for (let day = 1; day <= numDays; day++) {
      days[row][col] = day;
      if (CalendarService.isEndOfWeek(++col)) {
        // at the end of this week, break to new row
        days[++row] = CalendarService.emptyWeek();
        // rest the column back to the beginning of the wee
        col = 0;
      }
    }
    while (days.length < NUM_WEEK_ROWS) {
      // initialize an empty row
      days[++row] = CalendarService.emptyWeek();
    }
    return days;
  }
}

export class YearAndMonth {
  constructor(private _year: number, private _month: number) {
  }

  get year(): number {
    return this._year;
  }

  get month(): number {
    return this._month;
  }
}
