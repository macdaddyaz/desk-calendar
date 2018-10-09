import {CalendarState} from '@/store/types';

export function decrementMonth(state: CalendarState): void {
  state.selectedMonth = state.selectedMonth.subtract({months: 1}).clone();
}

export function incrementMonth(state: CalendarState): void {
  state.selectedMonth = state.selectedMonth.add({months: 1}).clone();
}
