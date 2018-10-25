import { derouterize, redirectToCurrentMonth, routerize, updateSelectedMonth } from '@/router/common';
import store from '@/store';

jest.mock('vuex');

describe('common router functions', () => {
  describe('routerize', () => {
    const routerizeTestData = [
      [2018, 5, '2018', '6'],
      [2014, 2, '2014', '3'],
      [2015, 0, '2015', '1'],
      [2022, 11, '2022', '12'],
    ];
    test.each(routerizeTestData)(
      'converts %d/%d to %s/%s',
      (realYear, realMonth, expectedYear, expectedMonth) => {
        const path = routerize({
          year: realYear,
          month: realMonth,
        });

        expect(path.year).toEqual(expectedYear);
        expect(path.month).toEqual(expectedMonth);
      },
    );
  });

  describe('derouterize', () => {
    const derouterizeTestData = [
      ['2018', '6', 2018, 5],
      ['2014', '3', 2014, 2],
      ['2015', '1', 2015, 0],
      ['2022', '12', 2022, 11],
    ];
    test.each(derouterizeTestData)(
      'converts %s/%s to %d/%d',
      (pathYear, pathMonth, expectedYear, expectedMonth) => {
        const real = derouterize({
          year: pathYear,
          month: pathMonth,
        });

        expect(real.year).toBe(expectedYear);
        expect(real.month).toBe(expectedMonth);
      },
    );
  });

  describe('redirectToCurrentMonth', () => {
    it('routes empty path to the current month', () => {
      const now = new Date();
      // Routes are not used as part of this function
      const RouteMock = jest.fn();
      const toMock = new RouteMock();
      const fromMock = new RouteMock();

      redirectToCurrentMonth(toMock, fromMock, (to) => {
        expect(to.name).toEqual('calendar');
        // noinspection TsLint
        expect(to.params.year).toEqual(String(now.getFullYear()));
        // noinspection TsLint
        expect(to.params.month).toEqual(String(now.getMonth() + 1));
      });
    });
  });

  describe('updateSelectedMonth', () => {
    it('updates the store with the new month', () => {
      const RouteMock = jest.fn();
      const toMock = new RouteMock();
      toMock.params = {
        year: '2012',
        month: '5',
      };
      const fromMock = new RouteMock();
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateSelectedMonth(toMock, fromMock, mockNext);
      expect(store.commit).toBeCalledWith('goToMonth', {
        year: 2012,
        month: 4,
      });
      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});
