import {createMoment} from '@/store/calendar/common';
import {CalendarState, YearAndMonth} from '@/store/types';

/**
 * Updates the calendar's selected month with the given month.
 * @param state
 * @param newMonth
 */
export function goToMonth(state: CalendarState, newMonth: YearAndMonth): void {
  state.selectedMonth = createMoment(newMonth);
}
