import {createMoment} from '@/store/calendar/common';

/**
 * Updates the calendar's selected month with the given month.
 * @param state
 * @param newMonth
 */
export function goToMonth(state, newMonth) {
  state.selectedMonth = createMoment(newMonth);
}
