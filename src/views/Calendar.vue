<template>
  <v-app>
    <Header :previous="previousRoute" :next="nextRoute"></Header>
    <CalendarGrid></CalendarGrid>
    <Footer></Footer>
  </v-app>
</template>

<script>
import CalendarGrid from '@/components/calendar/CalendarGrid.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { derouterize, routerize } from '@/router/common';
import { mapGetters } from 'vuex';

/**
 * Intermediate component that serves as a router target.
 */
export default {
  components: {
    CalendarGrid,
    Footer,
    Header,
  },
  computed: {
    ...mapGetters([
      'previousMonth',
      'nextMonth',
    ]),
    previousRoute() {
      return routerize(this.previousMonth);
    },
    nextRoute() {
      return routerize(this.nextMonth);
    },
  },
  beforeRouteUpdate(to, from, next) {
    const newMonth = derouterize(to.params);
    this.$store.commit('goToMonth', newMonth);
    next();
  },
};
</script>

<style lang="scss" scoped>

</style>
