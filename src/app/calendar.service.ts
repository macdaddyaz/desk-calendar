import {Injectable} from '@angular/core';
import * as moment from 'moment';
import Moment = moment.Moment;

/**
 * Value holder for a year and month combination. External clients create these
 * values with factory functions.
 *
 * #### Friendly vs. Real
 * 'Friendly' values use months that are 1-based rather than 0-based (i.e.
 * January = 1, December = 12). This is more natural when working with user-
 * facing values.
 *
 * 'Real' values are used internally by the `CalendarService`. These use the
 * 0-based months that JS `Date` and Moment.js are based on (i.e. January = 0,
 * December = 11).
 */
export interface YearAndMonth {
  readonly year: number;
  readonly month: number;
}

/**
 * Factory function for a year and month value. The value created by this
 * function is neither 'friendly' nor 'real'. It uses exactly the month value
 * that it is provided. Clients can create 'friendly' objects by using 1-based
 * months.
 * @param year The year of the value
 * @param month The 1-based month of the value
 * @returns {YearAndMonth} The composite year/month value
 */
export function yearAndMonth(year: number, month: number): YearAndMonth {
  return new YearAndMonthValue(year, month);
}

/**
 * Factory function for the current year and month value. The value created by
 * this function is 'friendly'.
 * @returns {YearAndMonth} The composite year/month value
 */
export function currentMonth(): YearAndMonth {
  let now = moment();
  return friendly(yearAndMonth(now.year(), now.month()));
}

/**
 * The `CalendarService` is an injectable service for building a monthly
 * calendar. It represents a month and year, and can calculate the weeks and
 * days of that month.
 */
@Injectable()
export class CalendarService {

  private _friendly: YearAndMonth;
  private _real: YearAndMonth;
  private _daysOfMonth: number[][] = null;

  constructor() {
  }

  /**
   * Navigates the service to the given year/month.
   * @param yearAndMonth
   */
  goTo(yearAndMonth: YearAndMonth): void {
    this._friendly = yearAndMonth;
    this._real = real(yearAndMonth);
    // Clear out the cached value so that it will be recalculated
    this._daysOfMonth = null;
  }

  /**
   * Calculates and returns the year and month immediately following the one
   * that the service is currently set to. Does not modify the service instance.
   * @returns {YearAndMonth} A year/month value representing the month after
   * the service's current month
   */
  get nextMonth(): YearAndMonth {
    const newMonth = this.magicMoment().add(1, 'months');
    const next = friendly(yearAndMonth(newMonth.year(), newMonth.month()));
    return next;
  }

  /**
   * Calculates and returns the year and month immediately preceding the one
   * that the service is currently set to. Does not modify the service instance.
   * @returns {YearAndMonth} A year/month value representing the month before
   * the service's current month
   */
  get previousMonth(): YearAndMonth {
    const newMonth = this.magicMoment().add(-1, 'months');
    const prev = friendly(yearAndMonth(newMonth.year(), newMonth.month()));
    return prev;
  }

  /**
   * Retrieves this service's current year and month.
   * @returns {YearAndMonth}
   */
  get yearAndMonth(): YearAndMonth {
    return this._friendly;
  }

  /**
   * Retrieves this services's current year.
   * @returns {number}
   */
  get year(): number {
    return this.yearAndMonth.year;
  }

  /**
   * Retrieves this service's current month.
   * @returns {number}
   */
  get month(): number {
    return this.yearAndMonth.month;
  }

  /**
   * Retrieves the name of this service's current month.
   * @returns {string}
   */
  get monthName(): string {
    return moment.months(this._real.month);
  }

  /**
   * Retrieves the days that are in this service's current year and month. The
   * days are organized by weeks of 7 days each. There will always be 6 weeks in
   * the returned array, to account for months where the days are spread over
   * parts of 6 weeks. If the month only has 5 weeks, an empty week will be at
   * the end.
   *
   * For instance, the month of October 2016 would look as follows, with the
   * week as the outermost array, and the days in each week as the inner arrays:
   * ```
   *     [0] S | [1] M | [2] T | [3] W | [4] T | [5] F | [6] S
   * [0]  null |  null |  null |  null |  null |  null |   1
   * [1]   2   |   3   |   4   |   5   |   6   |   7   |   8
   * [2]   9   |   10  |   11  |   12  |   13  |   14  |   15
   * [3]   16  |   17  |   18  |   19  |   20  |   21  |   22
   * [4]   23  |   24  |   25  |   26  |   27  |   28  |   29
   * [5]   30  |   31  |  null |  null |  null |  null |  null
   * ```
   * @returns {number[][]} A 6 x 7 array of days in the month, with the day
   * number in the each corresponding slot, or `null` values in slots without a
   * day.
   */
  get daysOfMonth(): number[][] {
    if (this._daysOfMonth === null) {
      this._daysOfMonth = this.calculateDaysOfMonth();
    }
    return this._daysOfMonth;
  }

  /**
   * Retrieves the names of the weekdays.
   * @returns {string[]} A 7-element array containing the names of the weekdays.
   */
  get daysOfWeek(): string[] {
    return moment.weekdaysShort();
  }

  /**
   * Builds a Moment.js `Moment` object from the service's year/month. This
   * moment object may not be "sensible", such as when the service is set to
   * 'February 2016', but the current day of the month is the 31st.
   * @returns {Moment} A moment set to the service's month and year
   */
  private toMoment(): Moment {
    return moment().year(this._real.year).month(this._real.month);
  }

  /**
   * Builds a Moment.js `Moment` object that represents a valid day in the
   * service's year/month.
   * @returns {Moment} A valid moment in the service's month and year
   */
  private magicMoment(): Moment {
    return this.toMoment().date(1);
  }

  /**
   * Calculates the days of the service's month and year.
   * @returns {number[][]}
   */
  private calculateDaysOfMonth(): number[][] {
    const NUM_WEEK_ROWS = 6;
    const days = [];

    const firstDay = this.toMoment().startOf('month');
    const lastDay = this.toMoment().endOf('month');
    const numDays = lastDay.daysInMonth();
    const firstDayPos = firstDay.weekday();
    let row = 0;
    // initially offset the column to the day of week that the 1st falls on
    let col = firstDayPos;

    // initializing first row of grid
    days[row] = emptyWeek();
    for (let day = 1; day <= numDays; day++) {
      days[row][col] = day;
      if (isEndOfWeek(++col)) {
        // at the end of this week, break to new row
        days[++row] = emptyWeek();
        // rest the column back to the beginning of the wee
        col = 0;
      }
    }
    while (days.length < NUM_WEEK_ROWS) {
      // initialize an empty row
      days[++row] = emptyWeek();
    }
    return days;
  }
}

/**
 * A basic implementation of the `YearAndMonth` interface. This class makes no
 * attempt to ensure that the provided values are a valid year or month.
 */
class YearAndMonthValue implements YearAndMonth {
  constructor(private _year: number,
              private _month: number) {
  }

  get year(): number {
    return this._year;
  }

  get month(): number {
    return this._month;
  }

}

/**
 * Converts a `YearAndMonth` that is assumed to be 'friendly' into a 'real'
 * value.
 * @param friendly
 * @returns {YearAndMonth}
 */
function real(friendly: YearAndMonth): YearAndMonth {
  return new YearAndMonthValue(friendly.year, friendly.month - 1);
}

/**
 * Converts a `YearAndMonth` that is assumed to be 'real' into a 'friendly'
 * value.
 * @param real
 * @returns {YearAndMonth}
 */
function friendly(real: YearAndMonth): YearAndMonth {
  return new YearAndMonthValue(real.year, real.month + 1);
}

/**
 * Factory function to create an empty week array.
 * @returns {number[]}
 */
function emptyWeek(): number[] {
  return Array.of(null, null, null, null, null, null, null);
}

/**
 * Helper method to determine whether the given day of week index is the last
 * day. This helps the calculation to determine when to break to a new week.
 * @param dayOfWeek The index of the day of the week (0-6)
 * @returns {boolean} Whether the given index is at the end of the week
 */
function isEndOfWeek(dayOfWeek: number): boolean {
  return Math.floor(dayOfWeek / 7) === 1;
}
