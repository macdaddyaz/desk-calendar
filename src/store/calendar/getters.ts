import {toCalendarMonth, toMoment} from '@/store/calendar/common';
import {CalendarMonth, CalendarState} from '@/store/types';

export function previousMonth(state: CalendarState): CalendarMonth {
  const prev = toMoment(state.currentMonth).subtract({months: 1});
  return toCalendarMonth(prev);
}

export function nextMonth(state: CalendarState): CalendarMonth {
  const next = toMoment(state.currentMonth).add({months: 1});
  return toCalendarMonth(next);
}
