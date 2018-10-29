import { createMoment } from '@/store/common';

/**
 * Updates the calendar's selected month with the given month.
 * @param state
 * @param newMonth
 */
export function goToMonth(state, newMonth) {
  state.selectedMonth = createMoment(newMonth);
}

export function updateLocale(state, { locale }) {
  state.options.locale = locale;
  state.selectedMonth.locale(locale);
}
