import { currentMonth } from '@/store/calendar/common';
import * as getters from '@/store/calendar/getters';
import * as mutations from '@/store/calendar/mutations';
import { defaultOptions } from '@/store/options/common';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const selectedMonth = currentMonth();
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
