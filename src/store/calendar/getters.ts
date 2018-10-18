import {CalendarState, YearAndMonth} from '@/store/types';

/**
 * Retrieves the month before the calendar's current month.
 * @param state
 */
export function previousMonth(state: CalendarState): YearAndMonth {
  const previous = state.selectedMonth.clone().subtract({months: 1});
  return {year: previous.year(), month: previous.month()};
}

/**
 * Retrieves the month after the calendar's current month.
 * @param state
 */
export function nextMonth(state: CalendarState): YearAndMonth {
  const next = state.selectedMonth.clone().add({months: 1});
  return {year: next.year(), month: next.month()};
}

/**
 * Retrieves a name for the current month.
 * @param state
 */
export function monthName(state: CalendarState): string {
  return state.selectedMonth.format('MMMM');
}

/**
 * Retrieves the year of the current month.
 * @param state
 */
export function year(state: CalendarState): number {
  return state.selectedMonth.year();
}

/**
 * Retrieves the names of the weekdays.
 * @param state
 */
export function weekdayNames(state: CalendarState): string[] {
  return state.selectedMonth.localeData().weekdays();
}

/**
 * Retrieves the days of the current month, in a 42-element array. The "empty"
 * days will be set to `null`.
 * @param state
 */
export function daysOfMonth(state: CalendarState): number[] {
  const days: number[] = Array(42).fill(null);
  const offset = state.selectedMonth.weekday();
  const daysInMonth = state.selectedMonth.daysInMonth();
  for (let i = 0; i < daysInMonth; i++) {
    days[offset + i] = i + 1;
  }
  return days;
}
