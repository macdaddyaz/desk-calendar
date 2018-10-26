import { createMoment } from '@/store/calendar/common';
import { defaultOptions } from '@/store/options/common';
import { monthDisplay, weekdayDisplay } from '@/store/options/strategies';

describe('common option functions', () => {
  describe('defaultOptions', () => {
    it('defaults language to "en"', () => {
      const options = defaultOptions();
      expect(options.locale).toEqual('en');
    });

    it('defaults month display strategy to "full"', () => {
      const options = defaultOptions();
      expect(options.monthDisplayLabelStrategy).toBe(monthDisplay.full);
    });

    it('defaults weekday display strategy to "full"', () => {
      const options = defaultOptions();
      expect(options.weekdayDisplayLabelStrategy).toBe(weekdayDisplay.full);
    });
  });
});

describe('month display strategies', () => {
  describe('full', () => {
    const fullMonthData = [
      [0, 2016, 'January 2016'],
      [4, 1998, 'May 1998'],
      [5, 3, 'June 3'],
      [9, 2022, 'October 2022'],
      [10, 903, 'November 903'],
      [11, 70, 'December 70'],
      [3, 12345, 'April +12345'],
    ];
    test.each(fullMonthData)('displays %d/%d as %s', (month, year, expectedDisplay) => {
      const m = createMoment({
        year,
        month,
      });
      expect(monthDisplay.full(m)).toEqual(expectedDisplay);
    });
  });

  describe('short', () => {
    const shortMonthData = [
      [0, 2016, 'Jan 2016'],
      [4, 1998, 'May 1998'],
      [5, 3, 'Jun 3'],
      [9, 2022, 'Oct 2022'],
      [10, 903, 'Nov 903'],
      [11, 70, 'Dec 70'],
      [3, 12345, 'Apr +12345'],
    ];
    test.each(shortMonthData)('displays %d/%d as %s', (month, year, expectedDisplay) => {
      const m = createMoment({
        year,
        month,
      });
      expect(monthDisplay.short(m)).toEqual(expectedDisplay);
    });
  });

  describe('compact', () => {
    const compactMonthData = [
      [0, 2016, 'Jan 16'],
      [4, 1998, 'May 98'],
      [5, 3, 'Jun 03'],
      [9, 2022, 'Oct 22'],
      [10, 903, 'Nov 03'],
      [11, 70, 'Dec 70'],
      [3, 12345, 'Apr 45'],
    ];
    test.each(compactMonthData)('displays %d/%d as %s', (month, year, expectedDisplay) => {
      const m = createMoment({
        year,
        month,
      });
      expect(monthDisplay.compact(m)).toEqual(expectedDisplay);
    });
  });
});

describe('weekday display strategies', () => {
  describe('full', () => {
    it('supplies the full weekday names and starts the week with Sunday', () => {
      const m = createMoment({
        year: 2018,
        month: 4,
      });
      const expectedNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      expect(weekdayDisplay.full(m)).toEqual(expectedNames);
    });
  });

  describe('short', () => {
    it('supplies the short weekday names and starts the week with Sunday', () => {
      const m = createMoment({
        year: 2018,
        month: 4,
      });
      const expectedNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      expect(weekdayDisplay.short(m)).toEqual(expectedNames);
    });
  });

  describe('compact', () => {
    it('supplies the compact weekday names and starts the week with Sunday', () => {
      const m = createMoment({
        year: 2018,
        month: 4,
      });
      const expectedNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

      expect(weekdayDisplay.compact(m)).toEqual(expectedNames);
    });
  });
});
