import { CalendarOptions, YearAndMonth } from '@/store/common';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';

export function makeCalendarState({ year, month }) {
  return {
    selectedMonth: new YearAndMonth(year, month),
    options: CalendarOptions.default(),
  };
}


export function makeTestStoreConfig({ year, month }) {
  const state = makeCalendarState({
    year,
    month,
  });

  return {
    state,
    getters,
    mutations,
  };
}
