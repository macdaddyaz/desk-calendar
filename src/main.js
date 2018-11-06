import { calendarStorage } from '@/storage';
import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    this.$store.watch(state => state.options.locale, (newLocale) => {
      calendarStorage.locale = newLocale;
    });
  },
  render: h => h(App),
}).$mount('#app');
