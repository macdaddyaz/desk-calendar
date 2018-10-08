import {CalendarState} from '@/store/types';
import {Moment} from 'moment';

export function previousMonth(state: CalendarState): Moment {
  return state.selectedMonth.clone().subtract({months: 1});
}

export function nextMonth(state: CalendarState): Moment {
  return state.selectedMonth.clone().add({months: 1});
}

export function monthName(state: CalendarState): string {
  return state.selectedMonth.format('MMMM');
}

export function weekdayNames(state: CalendarState): string[] {
  return state.selectedMonth.localeData().weekdays();
}

export function daysOfMonth(state: CalendarState): number[] {
  const days: number[] = Array(42).fill(null);
  const offset = state.selectedMonth.weekday();
  const daysInMonth = state.selectedMonth.daysInMonth();
  for (let i = 0; i < daysInMonth; i++) {
    days[offset + i] = i + 1;
  }
  return days;
}
