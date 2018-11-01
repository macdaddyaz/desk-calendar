import { defaultOptions, YearAndMonth } from '@/store/common';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const selectedMonth = YearAndMonth.current();
const options = defaultOptions();

export default new Vuex.Store({
  state: {
    selectedMonth,
    options,
  },
  getters,
  mutations,
  actions: {},
});
