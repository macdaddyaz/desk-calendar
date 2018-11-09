<template>
  <v-app v-touch="{
          left: () => goNext(),
          right: () => goPrevious(),
        }">
    <CalendarHeader :previous="previousRoute" :next="nextRoute"
                    v-on:nav-previous="goPrevious" v-on:nav-next="goNext">
    </CalendarHeader>
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
  methods: {
    goPrevious() {
      this.$router.push({
        name: 'calendar',
        params: this.previousRoute,
      });
    },
    goNext() {
      this.$router.push({
        name: 'calendar',
        params: this.nextRoute,
      });
    },
    handleKeyEvent(event) {
      switch (event.key) {
      case 'ArrowLeft':
        this.goPrevious();
        break;
      case 'ArrowRight':
        this.goNext();
        break;
      default:
        // ignore
      }
    },
  },
  created() {
    window.addEventListener('keyup', this.handleKeyEvent);
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
