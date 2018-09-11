import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.base,
    secondary: colors.green.lighten3,
    accent: colors.blue.base,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.purple.base,
    success: colors.green.base,
  },
});
