import { CalendarOptions, YearAndMonth } from '@/store/common';
import { monthDisplay, weekdayDisplay } from '@/store/strategies';
import { createLocalVue } from '@vue/test-utils';
import moment from 'moment';
import Vuex from 'vuex';
import { makeTestStoreConfig } from './testStore';

describe('CalendarOptions', () => {
  describe('default', () => {
    it('defaults language to "en"', () => {
      const options = CalendarOptions.default();
      expect(options.locale).toEqual('en');
    });

    it('defaults month display strategy to "full"', () => {
      const options = CalendarOptions.default();
      expect(options.monthDisplayLabelStrategy).toBe(monthDisplay.full);
    });

    it('defaults weekday display strategy to "full"', () => {
      const options = CalendarOptions.default();
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
      const m = new YearAndMonth(year, month).toMoment();
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
      const m = new YearAndMonth(year, month).toMoment();
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
      const m = new YearAndMonth(year, month).toMoment();
      expect(monthDisplay.compact(m)).toEqual(expectedDisplay);
    });
  });
});

describe('weekday display strategies', () => {
  describe('full', () => {
    it('supplies the full weekday names and starts the week with Sunday', () => {
      const localeData = moment.localeData('en');
      const expectedNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      expect(weekdayDisplay.full(localeData)).toEqual(expectedNames);
    });
  });

  describe('short', () => {
    it('supplies the short weekday names and starts the week with Sunday', () => {
      const localeData = moment.localeData('en');
      const expectedNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      expect(weekdayDisplay.short(localeData)).toEqual(expectedNames);
    });
  });

  describe('compact', () => {
    it('supplies the compact weekday names and starts the week with Sunday', () => {
      const localeData = moment.localeData('en');
      const expectedNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

      expect(weekdayDisplay.compact(localeData)).toEqual(expectedNames);
    });
  });
});


describe('option mutations', () => {
  describe('updateLocale', () => {
    it('updates state with the given locale', () => {
      const storeConfig = makeTestStoreConfig({
        year: 2018,
        month: 9,
      });
      const store = new Vuex.Store(storeConfig);
      store.commit('updateLocale', { locale: 'fr' });

      expect(store.state.options.locale).toEqual('fr');
    });

    const localVue = createLocalVue();
    localVue.use(Vuex);

    it('triggers other state updates', () => {
      const storeConfig = makeTestStoreConfig({
        year: 2015,
        month: 5,
      });
      const store = new Vuex.Store(storeConfig);
      // check starting state
      expect(store.getters.monthDisplayLabel).toEqual('June 2015');
      expect(store.getters.weekdayNames)
        .toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
      expect(store.getters.daysOfMonth)
        .toEqual([
          null, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13,
          14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, null, null, null, null,
          null, null, null, null, null, null, null,
        ]);
      store.commit('updateLocale', { locale: 'it' });
      expect(store.getters.monthDisplayLabel).toEqual('giugno 2015');
      expect(store.getters.weekdayNames)
        .toEqual(['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica']);
      expect(store.getters.daysOfMonth)
        .toEqual([
          1, 2, 3, 4, 5, 6, 7,
          8, 9, 10, 11, 12, 13, 14,
          15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26, 27, 28,
          29, 30, null, null, null, null, null,
          null, null, null, null, null, null, null,
        ]);
    });
  });

  describe('updateDensity', () => {
    it('updates state with the given density', () => {
      const storeConfig = makeTestStoreConfig({
        year: 2022,
        month: 3,
      });
      const store = new Vuex.Store(storeConfig);
      store.commit('updateDensity', { density: 'compact' });

      expect(store.state.options.monthDisplayLabelStrategy).toEqual(monthDisplay.compact);
      expect(store.state.options.weekdayDisplayLabelStrategy).toEqual(weekdayDisplay.compact);
    });

    it('triggers other state updates', () => {
      const storeConfig = makeTestStoreConfig({
        year: 2006,
        month: 1,
      });
      const store = new Vuex.Store(storeConfig);
      // check starting state
      expect(store.getters.monthDisplayLabel).toEqual('February 2006');
      expect(store.getters.weekdayNames)
        .toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
      store.commit('updateDensity', { density: 'short' });
      expect(store.getters.monthDisplayLabel).toEqual('Feb 2006');
      expect(store.getters.weekdayNames)
        .toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });
  });
});
