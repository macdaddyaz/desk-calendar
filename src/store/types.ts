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

export type DisplayStrategy = (val: number) => string;

export interface CalendarState {
  selectedMonth: Moment;
}

export interface CalendarOptions {
  locale: SupportedLocale;
  monthDisplayStrategy: DisplayStrategy;
  weekdayDisplayStrategy: DisplayStrategy;
}
