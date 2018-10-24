<template>
  <v-app>
    <Header></Header>
    <CalendarGrid></CalendarGrid>
    <Footer></Footer>
  </v-app>
</template>

<script>
import CalendarGrid from '@/components/calendar/CalendarGrid.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

/**
 * Intermediate component that serves as a router target.
 */
export default {
  components: {
    CalendarGrid,
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>

</style>
