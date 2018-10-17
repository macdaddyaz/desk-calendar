import {derouterize, redirectToCurrentMonth, routerize, updateSelectedMonth} from '@/router/common';
import {RouterHookCallbackLocation} from '@/router/types';
import {Location, Route} from 'vue-router';
import {Store} from 'vuex';
import {Store as MockStore} from 'vuex-mock-store';

// Wizardry! A kludgy little workaround to allow us to mock up the Vuex store
// that the `updateSelectedMonth` function uses.
//
// None of the techniques that I tried to mock the entire 'store' module worked
// properly. The closest one worked, but was extremely sensitive to the order of
// the imports. But formatting the code in the IDE resulted in re-ordering the
// imports, which broke the test.
//
// Instead, we create a mock store manually that can be optionally passed into
// the function. The function itself will look supplement a missing parameter
// with the real store.
const mockStore = new MockStore({});
// The Store type from 'vuex-mock-store' doesn't actually look like a Vuex
// Store, so we have to fudge it here and convince the compiler that it's fine.
let store: Store<any>;
if (isStore(mockStore)) {
  store = mockStore;
}

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

      updateSelectedMonth(toMock, fromMock, mockNext, store);
      expect(store.commit).toHaveBeenCalledWith('goToMonth', {year: 2012, month: 4});
      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});

function isLocation(arg: any): arg is Location {
  return (arg as Location).name !== undefined && (arg as Location).params !== undefined;
}

function isStore(val: any): val is Store<any> {
  return val.commit !== undefined;
}
