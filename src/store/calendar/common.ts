import {CalendarMonth} from '@/store/types';
import moment, {Moment} from 'moment';

export function toMoment(yearAndMonth: CalendarMonth): Moment {
  return moment().month(yearAndMonth.month).year(yearAndMonth.year);
}

export function toCalendarMonth(dt: Moment): CalendarMonth {
  return {year: dt.year(), month: dt.month()};
}

export function currentCalendarMonth(): CalendarMonth {
  return toCalendarMonth(moment());
}

export function calendarMonth(year: number, month: number): CalendarMonth {
  return {year, month};
}
