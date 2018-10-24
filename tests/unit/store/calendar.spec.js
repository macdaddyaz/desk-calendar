import {
  currentMonth,
  currentYearAndMonth,
  createMoment,
} from '@/store/calendar/common';

describe('calendar functions', () => {

  describe('common calendar functions', () => {

    test('currentMonth: matches system time', () => {
      const curr = currentMonth();
      const now = new Date();

      expect(curr.year()).toBe(now.getFullYear());
      expect(curr.month()).toBe(now.getMonth());
      expect(curr.date()).toBe(1);
    });

    test('currentYearAndMonth: matches system time', () => {
      const curr = currentYearAndMonth();
      const now = new Date();

      expect(curr.year).toBe(now.getFullYear());
      expect(curr.month).toBe(now.getMonth());
    });

    test('createMoment: sets the right year/month/day', () => {
      const m = createMoment({
        year: 2018,
        month: 9
      });

      expect(m.year()).toBe(2018);
      expect(m.month()).toBe(9);
      expect(m.date()).toBe(1);
    });
  });
});
