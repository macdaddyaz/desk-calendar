import {CalendarMonth, CalendarState} from '@/store/types';
import moment, {Moment} from 'moment';

// -----------------------------------------------------------------------------
// Getters
// -----------------------------------------------------------------------------
export function previousMonth(state: CalendarState): CalendarMonth {
  const prev = toMoment(state.currentMonth).subtract({months: 1});
  return toCalendarMonth(prev);
}

export function nextMonth(state: CalendarState): CalendarMonth {
  const next = toMoment(state.currentMonth).add({months: 1});
  return toCalendarMonth(next);
}

// -----------------------------------------------------------------------------
// Mutations
// -----------------------------------------------------------------------------
export function incrementMonth(state: CalendarState): void {

}

export function decrementMonth(state: CalendarState): void {

}

// -----------------------------------------------------------------------------
// Other Functions
// -----------------------------------------------------------------------------
function toMoment(yearAndMonth: CalendarMonth): Moment {
  return moment().month(yearAndMonth.month).year(yearAndMonth.year);
}

function toCalendarMonth(dt: Moment): CalendarMonth {
  return {year: dt.year(), month: dt.month()};
}

export function currentCalendarMonth(): CalendarMonth {
  return toCalendarMonth(moment());
}

export function calendarMonth(year: number, month: number): CalendarMonth {
  return {year, month};
}
