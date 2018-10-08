import {CalendarState} from '@/store/types';

export function decrementMonth(state: CalendarState): void {
  state.selectedMonth.subtract({months: 1});
}

export function incrementMonth(state: CalendarState): void {
  state.selectedMonth.add({months: 1});
}
