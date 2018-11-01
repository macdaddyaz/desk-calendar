import { YearAndMonth } from '@/store/common';

/**
 * Updates the calendar's selected month with the given month.
 * @param state
 * @param newMonth
 */
export function goToMonth(state, { year, month }) {
  state.selectedMonth = new YearAndMonth(year, month);
}

/**
 * Updates the options' selected locale, and propagates it to the underlying
 * selected month, so that UI state reflects the new locale.
 * @param state
 * @param locale
 */
export function updateLocale(state, { locale }) {
  state.options.locale = locale;
}
