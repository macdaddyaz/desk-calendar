<template>
  <v-app>
    <Header></Header>
    <CalendarGrid></CalendarGrid>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import CalendarGrid from '@/components/calendar/CalendarGrid.vue';

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
  #main {
    background-color: #d8d8d8;
  }
</style>
