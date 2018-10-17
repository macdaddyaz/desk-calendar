import {Moment} from 'moment';

export enum SupportedLocale {
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

export type MonthDisplayStrategy = (val: number) => string;
export type WeekdayDisplayStrategy = () => string[];

export interface YearAndMonth {
  year: number;
  month: number;
}

export interface CalendarState {
  selectedMonth: Moment;
}

export interface CalendarOptions {
  locale: SupportedLocale;
  monthDisplayStrategy: MonthDisplayStrategy;
  weekdayDisplayStrategy: WeekdayDisplayStrategy;
}
