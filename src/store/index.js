import { currentMonth, defaultOptions } from '@/store/common';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const selectedMonth = currentMonth();
const options = defaultOptions();

export const store = new Vuex.Store({
  state: {
    selectedMonth,
    options,
  },
  getters,
  mutations,
  actions: {},
});
