import {YearAndMonth} from '@/store/types';
import moment, {Moment} from 'moment';

/**
 * Creates a `Moment` object for the current month. The day of month is set
 * to 1.
 */
export function currentMonth(): Moment {
  return moment().date(1);
}

/**
 * Creates a `YearAndMonth` object for the current month.
 */
export function currentYearAndMonth(): YearAndMonth {
  const now = currentMonth();
  return {year: now.year(), month: now.month()};
}

/**
 * Creates a `Moment` object from the given `YearAndMonth`. The day of month is
 * set to 1.
 * @param yearAndMonth
 */
export function createMoment(yearAndMonth: YearAndMonth): Moment {
  return moment().year(yearAndMonth.year).month(yearAndMonth.month).date(1);
}
