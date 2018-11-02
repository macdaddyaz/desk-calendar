import * as strategies from '@/store/strategies';
import moment from 'moment';

// noinspection JSUnusedGlobalSymbols
export const locales = {
  ar: 'عربى',
  'zh-cn': '中文',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'français',
  hi: 'हिंदी',
  it: 'italiano',
  jp: '日本語',
  pt: 'Português',
  sw: 'swahili',
};

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
    this.yr = year;
    this.mo = month;
  }

  /**
   * Retrieves the 'year' that this object represents.
   * @returns {number}
   */
  get year() {
    return this.yr;
  }

  /**
   * Retrieves the 'month' that this object represents.
   * @returns {number}
   */
  get month() {
    return this.mo;
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

export class CalendarOptions {
  constructor(locale, monthDisplayLabelStrategy, weekdayDisplayLabelStrategy) {
    this.locale = locale;
    this.monthDisplayLabelStrategy = monthDisplayLabelStrategy;
    this.weekdayDisplayLabelStrategy = weekdayDisplayLabelStrategy;
  }

  static default() {
    return new CalendarOptions('en', strategies.monthDisplay.full, strategies.weekdayDisplay.full);
  }
}

export function defaultOptions() {
  return {
    locale: 'en',
    monthDisplayLabelStrategy: strategies.monthDisplay.full,
    weekdayDisplayLabelStrategy: strategies.weekdayDisplay.full,
  };
}

export function normalizeDensity(value) {
  if (!densities.includes(value)) {
    return densities[0];
  }
  return value;
}
