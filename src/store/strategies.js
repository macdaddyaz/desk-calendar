export const monthDisplay = {
  full: moment => moment.format('MMMM Y'),
  short: moment => moment.format('MMM Y'),
  compact: moment => moment.format('MMM YY'),
};

// .slice() is to copy the array, because we get a reference to Moment's.
export const weekdayDisplay = {
  full: localeData => localeData.weekdays().slice(),
  short: localeData => localeData.weekdaysShort().slice(),
  compact: localeData => localeData.weekdaysMin().slice(),
};
