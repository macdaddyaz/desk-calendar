import {currentMonth, decrementMonth, incrementMonth, nextMonth, previousMonth} from '@/store/calendar';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMonth: currentMonth(),
  },
  getters: {
    previousMonth,
    nextMonth,
  },
  mutations: {
    decrementMonth,
    incrementMonth,
  },
  actions: {},
});
