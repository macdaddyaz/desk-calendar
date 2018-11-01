/**
 * Updates the calendar's selected month with the given month.
 * @param state
 * @param newMonth
 */
export function goToMonth(state, newMonth) {
  state.selectedMonth = state.selectedMonth.clone()
                             .year(newMonth.year)
                             .month(newMonth.month)
                             .locale(state.options.locale);
}

/**
 * Updates the options' selected locale, and propagates it to the underlying
 * selected month, so that UI state reflects the new locale.
 * @param state
 * @param locale
 */
export function updateLocale(state, { locale }) {
  state.options.locale = locale;
  state.selectedMonth = state.selectedMonth.clone().locale(locale);
}

// TODO Can we make the selectedMonth update more uniform?
