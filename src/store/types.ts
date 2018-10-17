import {Moment} from 'moment';

/**
 * Type representing a year and month displayed by the calendar.
 */
export interface YearAndMonth {
  year: number;
  month: number;
}

/**
 * Type of the calendar's state object.
 */
export interface CalendarState {
  selectedMonth: Moment;
}

/**
 * Locales that the calendar supports (not implemented).
 */
export enum SupportedLocale {
  // noinspection JSUnusedGlobalSymbols
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  Italian = 'it',
  German = 'de',
  Portuguese = 'pt',
  Chinese = 'cn',
  Japanese = 'ja',
  Arabic = 'ar',
}

/**
 * A strategy for displaying the month label.
 */
export type MonthDisplayStrategy = (val: number) => string;
/**
 * A strategy for displaying the days of the week.
 */
export type WeekdayDisplayStrategy = () => string[];

/**
 * A set of options for configuring the calendar (not implemented).
 */
// noinspection JSUnusedGlobalSymbols
export interface CalendarOptions {
  locale: SupportedLocale;
  monthDisplayStrategy: MonthDisplayStrategy;
  weekdayDisplayStrategy: WeekdayDisplayStrategy;
}
