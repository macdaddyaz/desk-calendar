import {
  calendarMonth,
  currentCalendarMonth,
  decrementMonth,
  incrementMonth,
  nextMonth,
  previousMonth,
  toCalendarMonth,
  toMoment,
} from '@/store/calendar';
import {CalendarState} from '@/store/types';
import moment from 'moment';

describe('calendar functions', () => {

  describe('common calendar functions', () => {

    test('calendarMonth properly assigns year and month', () => {
      const calMonth = calendarMonth(2020, 10);

      expect(calMonth.year).toBe(2020);
      expect(calMonth.month).toBe(10);
    });

    test('currentCalendarMonth matches system time', () => {
      const calMonth = currentCalendarMonth();
      const now = new Date();

      expect(calMonth.year).toBe(now.getFullYear());
      expect(calMonth.month).toBe(now.getMonth());
    });

    test('toCalendarMonth converts Moment instance', () => {
      const m = moment().year(2018).month(4).date(10);
      const calMonth = toCalendarMonth(m);

      expect(calMonth.year).toBe(2018);
      expect(calMonth.month).toBe(4);
    });

    test('toMoment converts a CalendarMonth instance', () => {
      const calMonth = calendarMonth(2014, 2);
      const m = toMoment(calMonth);

      expect(m.year()).toBe(2014);
      expect(m.month()).toBe(2);
    });
  });

  describe('calendar getters', () => {

    test('previousMonth has the right year and month', () => {
      const state = makeCalendarState(2017, 8);
      const prev = previousMonth(state);

      expect(prev.year).toBe(2017);
      expect(prev.month).toBe(7);
    });

    test('previousMonth rolls to previous year', () => {
      const state = makeCalendarState(2017, 0);
      const prev = previousMonth(state);

      expect(prev.year).toBe(2016);
      expect(prev.month).toBe(11);
    });

    test('nextMonth has the right year and month', () => {
      const state = makeCalendarState(2017, 4);
      const next = nextMonth(state);

      expect(next.year).toBe(2017);
      expect(next.month).toBe(5);
    });

    test('nextMonth rolls to next year', () => {
      const state = makeCalendarState(2017, 11);
      const next = nextMonth(state);

      expect(next.year).toBe(2018);
      expect(next.month).toBe(0);
    });
  });

  describe('calendar mutations', () => {

    test('decrementMonth selects the previous month', () => {
      const state = makeCalendarState(1997, 10);
      decrementMonth(state);

      expect(state.currentMonth).toEqual({year: 1997, month: 9});
    });

    test('decrementMonth rolls to previous year', () => {
      const state = makeCalendarState(2000, 0);
      decrementMonth(state);

      expect(state.currentMonth).toEqual({year: 1999, month: 11});
    });

    test('incrementMonth selects the next month', () => {
      const state = makeCalendarState(2020, 8);
      incrementMonth(state);

      expect(state.currentMonth).toEqual({year: 2020, month: 9});
    });

    test('incrementMonth rolls to next year', () => {
      const state = makeCalendarState(2000, 11);
      incrementMonth(state);

      expect(state.currentMonth).toEqual({year: 2001, month: 0});
    });
  });
});

function makeCalendarState(year: number, month: number): CalendarState {
  return {
    currentMonth: calendarMonth(year, month),
  };
};
