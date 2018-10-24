import {createMoment, currentMonth, currentYearAndMonth} from '@/store/calendar/common';
import {
  daysOfMonth,
  monthName,
  nextMonth,
  previousMonth,
  weekdayNames,
  year,
} from '../../../src/store/calendar/getters';
import {goToMonth} from '../../../src/store/calendar/mutations';

describe('common calendar functions', () => {

  describe('currentMonth', () => {

    it('matches system time', () => {
      const curr = currentMonth();
      const now = new Date();

      expect(curr.year()).toBe(now.getFullYear());
      expect(curr.month()).toBe(now.getMonth());
      expect(curr.date()).toBe(1);
    });
  });

  describe('currentYearAndMonth', () => {

    it('matches system time', () => {
      const curr = currentYearAndMonth();
      const now = new Date();

      expect(curr.year).toBe(now.getFullYear());
      expect(curr.month).toBe(now.getMonth());
    });
  });

  describe('createMoment', () => {

    it('createMoment: sets the right year/month/day', () => {
      const m = createMoment({
        year: 2018,
        month: 9,
      });

      expect(m.year()).toBe(2018);
      expect(m.month()).toBe(9);
      expect(m.date()).toBe(1);
    });
  });
});

describe('calendar getters', () => {

  describe('previousMonth', () => {

    it('has the right year and month', () => {
      const state = makeCalendarState({year: 2017, month: 8});
      const prev = previousMonth(state);

      expect(prev.year).toBe(2017);
      expect(prev.month).toBe(7);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(8);
    });

    it('rolls to previous year', () => {
      const state = makeCalendarState({year: 2017, month: 0});
      const prev = previousMonth(state);

      expect(prev.year).toBe(2016);
      expect(prev.month).toBe(11);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(0);
    });
  });

  describe('nextMonth', () => {

    it('has the right year and month', () => {
      const state = makeCalendarState({year: 2017, month: 4});
      const next = nextMonth(state);

      expect(next.year).toBe(2017);
      expect(next.month).toBe(5);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(4);
    });

    it('rolls to next year', () => {
      const state = makeCalendarState({year: 2017, month: 11});
      const next = nextMonth(state);

      expect(next.year).toBe(2018);
      expect(next.month).toBe(0);
      // Ensure existing state has not changed
      expect(state.selectedMonth.year()).toBe(2017);
      expect(state.selectedMonth.month()).toBe(11);
    });
  });

  describe('monthName', () => {

    const monthNameTestData = [
      [0, 'January'],
      [1, 'February'],
      [2, 'March'],
      [3, 'April'],
      [4, 'May'],
      [5, 'June'],
      [6, 'July'],
      [7, 'August'],
      [8, 'September'],
      [9, 'October'],
      [10, 'November'],
      [11, 'December'],
    ];

    test.each(monthNameTestData)(
      'monthName: month %d displays as %s', (month, expectedName) => {
        const state = makeCalendarState({year: 2018, month});
        expect(monthName(state)).toEqual(expectedName);
      },
    );
  });

  describe('year', () => {

    const yearTestData = [2015, 2016, 2020, 2193, 1492];

    test.each(yearTestData)(
      'year: %d', (expected) => {
        const state = makeCalendarState({year: expected, month: 2});
        expect(year(state)).toBe(expected);
      },
    );
  });

  describe('weekdayNames', () => {

    it('supplies the correct names and starts the week with Sunday', () => {
      const state = makeCalendarState({year: 2018, month: 4});
      expect(weekdayNames(state))
        .toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    });
  });

  describe('daysOfMonth', () => {

    it('supplies the correct days for June 2015', () => {
      const state = makeCalendarState({year: 2015, month: 5});
      const days = daysOfMonth(state);
      expect(days[0]).toBeNull();
      expect(days[1]).toBe(1);
      expect(days[23]).toBe(23);
      expect(days[30]).toBe(30);
      expect(days[31]).toBeNull();
      expect(days[41]).toBeNull();
    });

    it('supplies the correct days for August 2018', () => {
      const state = makeCalendarState({year: 2018, month: 7});
      const days = daysOfMonth(state);
      expect(days[0]).toBeNull();
      expect(days[2]).toBeNull();
      expect(days[3]).toBe(1);
      expect(days[19]).toBe(17);
      expect(days[33]).toBe(31);
      expect(days[34]).toBeNull();
      expect(days[41]).toBeNull();
    });
  });
});

describe('calendar mutations', () => {

  describe('goToMonth', () => {

    it('updates state with the given month', () => {
      const state = makeCalendarState({year: 2013, month: 4});
      goToMonth(state, {year: 2018, month: 1});

      expect(state.selectedMonth.year()).toBe(2018);
      expect(state.selectedMonth.month()).toBe(1);
      expect(state.selectedMonth.date()).toBe(1);
    });
  });
});

function makeCalendarState(yearAndMonth) {
  return {
    selectedMonth: createMoment(yearAndMonth),
  };
}