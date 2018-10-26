import * as strategies from '@/store/options/strategies';

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
