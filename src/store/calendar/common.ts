import {YearAndMonth} from '@/store/types';
import moment, {Moment} from 'moment';

export function currentMonth(): Moment {
  return moment().date(1);
}

export function currentYearAndMonth(): YearAndMonth {
  const now = currentMonth();
  return {year: now.year(), month: now.month()};
}

export function createMoment(yearAndMonth: YearAndMonth): Moment {
  return moment().year(yearAndMonth.year).month(yearAndMonth.month).date(1);
}
