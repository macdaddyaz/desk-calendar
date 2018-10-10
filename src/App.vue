<template>
  <v-app>
    <Header></Header>
    <CalendarGrid></CalendarGrid>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
  import CalendarGrid from '@/components/calendar/CalendarGrid.vue';
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Header.vue';
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {
      Header,
      Footer,
      CalendarGrid,
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss" scoped>
</style>
