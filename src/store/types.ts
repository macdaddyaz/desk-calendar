export enum SupportedLocale {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  Italian = 'it',
  German = 'de',
  Portuguese = 'pt',
  Chinese = 'cn',
  Japanese = 'ja',
}

export type DisplayStrategy = (val: number) => string;

export interface CalendarMonth {
  readonly year: number;
  readonly month: number;
}

export interface CalendarState {
  currentMonth: CalendarMonth;
}

export interface CalendarOptions {
  locale: SupportedLocale;
  monthDisplayStrategy: DisplayStrategy;
  weekdayDisplayStrategy: DisplayStrategy;
}
