import {createMoment} from '@/store/calendar/common';
import {CalendarState, YearAndMonth} from '@/store/types';

export function goToMonth(state: CalendarState, newMonth: YearAndMonth): void {
  state.selectedMonth = createMoment(newMonth).date(1);
}
