import {nextMonth, previousMonth} from '@/store/calendar/getters';
import {CalendarState} from '@/store/types';

export function decrementMonth(state: CalendarState): void {
  state.currentMonth = previousMonth(state);
}

export function incrementMonth(state: CalendarState): void {
  state.currentMonth = nextMonth(state);
}
