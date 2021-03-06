import { derouterize, routerize } from '@/router/common';
import { redirectToCurrentMonth, updateSelectedMonth, updateStateFromQuery } from '@/router/guards';
import store from '@/store';

jest.mock('vuex');

afterEach(() => {
  // Testing the 'store.commit' function in multiple places. Without resetting
  // the mocks between each test, the mock call information is retained and
  // pollutes subsequent tests.
  jest.resetAllMocks();
});

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
});

describe('router guard functions', () => {
  const RouteMock = jest.fn();

  describe('redirectToCurrentMonth', () => {
    it('routes empty path to the current month', () => {
      const now = new Date();
      // Routes are not used as part of this function
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

  describe('updateStateFromQuery', () => {
    it('updates the store with the specified locale', () => {
      const toMock = new RouteMock();
      toMock.query = {
        locale: 'fr',
      };
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateStateFromQuery(toMock, undefined, mockNext);
      expect(store.commit).toBeCalledWith('updateLocale', { locale: 'fr' });
      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it('updates the store with the specified density', () => {
      const toMock = new RouteMock();
      toMock.query = {
        density: 'compact',
      };
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateStateFromQuery(toMock, undefined, mockNext);
      expect(store.commit).toBeCalledWith('updateDensity', { density: 'compact' });
      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it('defaults to "full" if the parameter is not recognized', () => {
      const toMock = new RouteMock();
      toMock.query = {
        density: 'badvalue',
      };
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateStateFromQuery(toMock, undefined, mockNext);
      expect(store.commit).toBeCalledWith('updateDensity', { density: 'full' });
      expect(mockNext).toHaveBeenCalledTimes(1);
    });

    it('does not do anything when no query parameters are specified', () => {
      const toMock = new RouteMock();
      toMock.query = {};
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateStateFromQuery(toMock, undefined, mockNext);
      expect(store.commit.mock.calls.length).toBe(0);
      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});
