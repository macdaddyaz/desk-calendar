import { calendarStorage } from '@/storage';
import * as strategies from '@/store/strategies';
import moment from 'moment';

export const locales = [
  {
    value: 'ar',
    text: 'عربى',
  },
  {
    value: 'zh-cn',
    text: '中文',
  },
  {
    value: 'de',
    text: 'Deutsch',
  },
  {
    value: 'en',
    text: 'English',
  },
  {
    value: 'es',
    text: 'Español',
  },
  {
    value: 'fr',
    text: 'français',
  },
  {
    value: 'hi',
    text: 'हिंदी',
  },
  {
    value: 'it',
    text: 'italiano',
  },
  {
    value: 'ja',
    text: '日本語',
  },
  {
    value: 'pt',
    text: 'Português',
  },
  {
    value: 'sw',
    text: 'swahili',
  },
];

export const densities = ['full', 'short', 'compact'];

/**
 * Data structure representing a year and month combination.
 */
export class YearAndMonth {
  /**
   * Creates an object with the given year and month.
   * @param year {number}
   * @param month {number}
   */
  constructor(year, month) {
    this._year = year;
    this._month = month;
  }

  /**
   * Retrieves the 'year' that this object represents.
   * @returns {number}
   */
  get year() {
    return this._year;
  }

  /**
   * Retrieves the 'month' that this object represents.
   * @returns {number}
   */
  get month() {
    return this._month;
  }

  /**
   * Converts this `YearAndMonth` to a `moment`.
   * @param locale {string|null|undefined} If specified, the `moment` object's locale will be set
   * @return {moment.Moment}
   */
  toMoment(locale) {
    const m = moment().year(this.year)
                      .month(this.month)
                      .date(1);
    if (locale) {
      m.locale(locale);
    }
    return m;
  }

  /**
   * Creates a `YearAndMonth` object that represents the real current month.
   * @returns {YearAndMonth}
   */
  static current() {
    const now = moment();
    return new YearAndMonth(now.year(), now.month());
  }
}

/**
 * Data structure for the calendar options.
 */
export class CalendarOptions {
  constructor(locale, monthDisplayLabelStrategy, weekdayDisplayLabelStrategy) {
    this.locale = locale;
    this.monthDisplayLabelStrategy = monthDisplayLabelStrategy;
    this.weekdayDisplayLabelStrategy = weekdayDisplayLabelStrategy;
  }

  /**
   * Creates the default or starting options for the calendar:
   *   - English locale
   *   - Full density
   * @return {CalendarOptions}
   */
  static default() {
    const locale = calendarStorage.locale || 'en';
    return new CalendarOptions(locale, strategies.monthDisplay.full, strategies.weekdayDisplay.full);
  }
}

export function normalizeDensity(value) {
  if (!densities.includes(value)) {
    return densities[0];
  }
  return value;
}
