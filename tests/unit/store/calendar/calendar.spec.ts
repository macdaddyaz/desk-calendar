import {createMoment, currentMonth, decrementMonth, incrementMonth, nextMonth, previousMonth} from '@/store/calendar';
import {CalendarState} from '@/store/types';

describe('calendar functions', () => {

  describe('common calendar functions', () => {

    test('currentMonth matches system time', () => {
      const curr = currentMonth();
      const now = new Date();

      expect(curr.year()).toBe(now.getFullYear());
      expect(curr.month()).toBe(now.getMonth());
      expect(curr.date()).toBe(1);
    });

    test('createMoment sets the right year/month/day', () => {
      const m = createMoment(2018, 9);

      expect(m.year()).toBe(2018);
      expect(m.month()).toBe(9);
      expect(m.date()).toBe(1);
    });
  });

  describe('calendar getters', () => {

    test('previousMonth has the right year and month', () => {
      const state = makeCalendarState(2017, 8);
      const prev = previousMonth(state);

      expect(prev.year()).toBe(2017);
      expect(prev.month()).toBe(7);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(8);
    });

    test('previousMonth rolls to previous year', () => {
      const state = makeCalendarState(2017, 0);
      const prev = previousMonth(state);

      expect(prev.year()).toBe(2016);
      expect(prev.month()).toBe(11);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(0);
    });

    test('nextMonth has the right year and month', () => {
      const state = makeCalendarState(2017, 4);
      const next = nextMonth(state);

      expect(next.year()).toBe(2017);
      expect(next.month()).toBe(5);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(4);
    });

    test('nextMonth rolls to next year', () => {
      const state = makeCalendarState(2017, 11);
      const next = nextMonth(state);

      expect(next.year()).toBe(2018);
      expect(next.month()).toBe(0);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(11);
    });
  });

  describe('calendar mutations', () => {

    test('decrementMonth selects the previous month', () => {
      const state = makeCalendarState(1997, 10);
      decrementMonth(state);

      expect(state.selectedMonth.year()).toBe(1997);
      expect(state.selectedMonth.month()).toBe(9);
      expect(state.selectedMonth.date()).toBe(1);
    });

    test('decrementMonth rolls to previous year', () => {
      const state = makeCalendarState(2000, 0);
      decrementMonth(state);

      expect(state.selectedMonth.year()).toBe(1999);
      expect(state.selectedMonth.month()).toBe(11);
      expect(state.selectedMonth.date()).toBe(1);
    });

    test('incrementMonth selects the next month', () => {
      const state = makeCalendarState(2020, 8);
      incrementMonth(state);

      expect(state.selectedMonth.year()).toBe(2020);
      expect(state.selectedMonth.month()).toBe(9);
      expect(state.selectedMonth.date()).toBe(1);
    });

    test('incrementMonth rolls to next year', () => {
      const state = makeCalendarState(2000, 11);
      incrementMonth(state);

      expect(state.selectedMonth.year()).toBe(2001);
      expect(state.selectedMonth.month()).toBe(0);
      expect(state.selectedMonth.date()).toBe(1);
    });
  });
});

function makeCalendarState(year: number, month: number): CalendarState {
  return {
    selectedMonth: createMoment(year, month),
  };
}
