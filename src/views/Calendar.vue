<template>
  <v-app>
    <CalendarHeader :previous="previousRoute" :next="nextRoute"></CalendarHeader>
    <CalendarGrid></CalendarGrid>
    <Footer></Footer>
  </v-app>
</template>

<script>
import CalendarGrid from '@/components/calendar/CalendarGrid.vue';
import CalendarHeader from '@/components/calendar/CalendarHeader.vue';
import Footer from '@/components/Footer.vue';
import { derouterize, routerize } from '@/router/common';
import { mapGetters } from 'vuex';

/**
 * Intermediate component that serves as a router target.
 */
export default {
  components: {
    CalendarHeader,
    CalendarGrid,
    Footer,
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
