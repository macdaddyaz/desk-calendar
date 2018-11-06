import { CalendarOptions, YearAndMonth } from '@/store/common';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const selectedMonth = YearAndMonth.current();
const options = CalendarOptions.default();

const store = new Vuex.Store({
  state: {
    selectedMonth,
    options,
  },
  getters,
  mutations,
  actions: {},
});
export default store;
