import {derouterize, redirectToCurrentMonth, routerize, updateSelectedMonth} from '@/router/common';
import {RouterHookCallbackLocation} from '@/router/types';
import store from '@/store';
import {Location, Route} from 'vue-router';
// IMPORTANT!!!
// The order of the following imports is significant. Specifically, the import
// of Store from 'vuex-mock-store' *must* come before the import from
// '@/store'. Otherwise, the store is not mocked correctly, and the test fails.
import {Store} from 'vuex-mock-store';

jest.mock('@/store', () => {
  return new Store({});
});

describe('router functions', () => {

  describe('common router functions', () => {

    const routerizeTestData = [
      [2018, 5, '2018', '6'],
      [2014, 2, '2014', '3'],
      [2015, 0, '2015', '1'],
      [2022, 11, '2022', '12'],
    ];
    test.each(routerizeTestData)(
      'routerize: converts %d/%d to %s/%s',
      (realYear: number, realMonth: number, expectedYear: string, expectedMonth: string) => {
        const path = routerize({year: realYear, month: realMonth});

        expect(path.year).toEqual(expectedYear);
        expect(path.month).toEqual(expectedMonth);
      },
    );

    const derouterizeTestData = [
      ['2018', '6', 2018, 5],
      ['2014', '3', 2014, 2],
      ['2015', '1', 2015, 0],
      ['2022', '12', 2022, 11],
    ];
    test.each(derouterizeTestData)(
      'derouterize: converts %s/%s to %d/%d',
      (pathYear: string, pathMonth: string, expectedYear: number, expectedMonth: number) => {
        const real = derouterize({year: pathYear, month: pathMonth});

        expect(real.year).toBe(expectedYear);
        expect(real.month).toBe(expectedMonth);
      },
    );

    test('redirectToCurrentMonth: routes to the current month', (done) => {
      const now = new Date();
      // Routes are not used as part of this function
      const RouteMock = jest.fn<Route>();
      const toMock = new RouteMock();
      const fromMock = new RouteMock();

      redirectToCurrentMonth(toMock, fromMock, (to?: RouterHookCallbackLocation) => {
        if (isLocation(to)) {
          expect(to.name).toEqual('calendar');
          // noinspection TsLint
          expect(to.params!['year']).toEqual(String(now.getFullYear()));
          // noinspection TsLint
          expect(to.params!['month']).toEqual(String(now.getMonth() + 1));
        }
        else {
          done.fail('Callback parameter is not a Location object');
        }
        done();
      });
    });

    test('updateSelectedMonth: mutates the store with the month from the route', () => {
      const RouteMock = jest.fn<Route>();
      const toMock = new RouteMock();
      toMock.params = {year: '2012', month: '5'};
      const fromMock = new RouteMock();
      const mockNext = jest.fn(() => {
        // no implementation
      });

      updateSelectedMonth(toMock, fromMock, mockNext);
      expect(store.commit).toHaveBeenCalledWith('goToMonth', {year: 2012, month: 4});
      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});

function isLocation(arg: any): arg is Location {
  return (arg as Location).name !== undefined && (arg as Location).params !== undefined;
}
