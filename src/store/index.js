import { currentMonth } from '@/store/calendar/common';
import * as getters from '@/store/calendar/getters';
import * as mutations from '@/store/calendar/mutations';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialMonth = currentMonth();

export default new Vuex.Store({
  state: {
    selectedMonth: initialMonth,
  },
  getters,
  mutations,
  actions: {},
});
