export class CalendarStorage {
  constructor(storage) {
    this.storage = storage;
  }

  get locale() {
    return this.storage.getItem('locale');
  }

  set locale(newLocale) {
    this.storage.setItem('locale', newLocale);
  }
}

export const calendarStorage = new CalendarStorage(localStorage);
