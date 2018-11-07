import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.indigo.base,
    secondary: colors.indigo.lighten3,
    accent: colors.blueGrey.lighten2,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base,
  },
  options: {
    customProperties: true,
  },
});
