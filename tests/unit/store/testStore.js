import { YearAndMonth } from '@/store/common';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';
import { monthDisplay, weekdayDisplay } from '@/store/strategies';

export default function createTestStoreConfig({ year, month }) {
  const state = {
    selectedMonth: new YearAndMonth(year, month),
    options: {
      locale: 'en',
      monthDisplayLabelStrategy: monthDisplay.full,
      weekdayDisplayLabelStrategy: weekdayDisplay.full,
    },
  };

  return {
    state,
    getters,
    mutations,
  };
}
