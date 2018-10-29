import * as strategies from '@/store/strategies';
import moment from 'moment';

/**
 * Creates a `Moment` object for the current month. The day of month is set
 * to 1.
 */
export function currentMonth() {
  return moment().date(1);
}

/**
 * Creates a `YearAndMonth` object for the current month.
 */
export function currentYearAndMonth() {
  const now = currentMonth();
  return {
    year: now.year(),
    month: now.month(),
  };
}

/**
 * Creates a `Moment` object from the given `YearAndMonth`. The day of month is
 * set to 1.
 * @param yearAndMonth
 */
export function createMoment(yearAndMonth) {
  return moment().year(yearAndMonth.year)
                 .month(yearAndMonth.month)
                 .date(1);
}

export function defaultOptions() {
  return {
    locale: 'en',
    monthDisplayLabelStrategy: strategies.monthDisplay.full,
    weekdayDisplayLabelStrategy: strategies.weekdayDisplay.full,
  };
}

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
