import { CalendarStorage } from '@/storage';

describe('CalendarStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('locale', () => {
    it('should save to local storage', () => {
      const testStorage = new CalendarStorage(localStorage);
      testStorage.locale = 'test';
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenLastCalledWith('locale', 'test');
    });

    it('should read locale from local storage', () => {
      const testStorage = new CalendarStorage(localStorage);
      // eslint-disable-next-line no-unused-expressions
      testStorage.locale;
      expect(localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem).toHaveBeenLastCalledWith('locale');
    });
  });
});
