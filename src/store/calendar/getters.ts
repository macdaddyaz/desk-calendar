import {CalendarState} from '@/store/types';
import {Moment} from 'moment';

export function previousMonth(state: CalendarState): Moment {
  return state.selectedMonth.clone().subtract({months: 1});
}

export function nextMonth(state: CalendarState): Moment {
  return state.selectedMonth.clone().add({months: 1});
}
