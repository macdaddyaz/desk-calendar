import { YearAndMonth } from '@/store/common';
import moment from 'moment';

/**
 * Retrieves the month before the calendar's current month.
 * @param state
 * @return {YearAndMonth}
 */
export function previousMonth(state) {
  const previousMoment = state.selectedMonth.toMoment().subtract({ months: 1 });
  return new YearAndMonth(previousMoment.year(), previousMoment.month());
}

/**
 * Retrieves the month after the calendar's current month.
 * @param state
 * @return {YearAndMonth}
 */
export function nextMonth(state) {
  const nextMoment = state.selectedMonth.toMoment().add({ months: 1 });
  return new YearAndMonth(nextMoment.year(), nextMoment.month());
}

/**
 * Retrieves a display label for the currently selected month.
 * @param state
 * @returns {string} the display label
 */
export function monthDisplayLabel(state) {
  const { locale } = state.options;
  const m = state.selectedMonth.toMoment(locale);
  return state.options.monthDisplayLabelStrategy(m);
}

/**
 * Retrieves the names of the weekdays.
 * @param state
 * @return {Array} An array of strings
 */
export function weekdayNames(state) {
  const localeData = moment.localeData(state.options.locale);
  const weekdays = state.options.weekdayDisplayLabelStrategy(localeData);
  const firstDay = localeData.firstDayOfWeek();
  for (let i = 0; i < firstDay; i++) {
    weekdays.push(weekdays.shift());
  }
  return weekdays;
}

/**
 * Retrieves the days of the current month, in a 42-element array. The "empty"
 * days will be set to `null`.
 * @param state
 * @return {Array} An array of numbers, with `null` values for the empty slots.
 */
export function daysOfMonth(state) {
  const days = Array(42).fill(null);
  const m = state.selectedMonth.toMoment(state.options.locale);
  const offset = m.weekday();
  const daysInMonth = m.daysInMonth();
  for (let i = 0; i < daysInMonth; i++) {
    days[offset + i] = i + 1;
  }
  return days;
}
