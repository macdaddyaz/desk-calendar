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
  import {RawLocation, Route} from 'vue-router';
  import {Mutation} from 'vuex-class';

  @Component({
    components: {
      Header,
      Footer,
      CalendarGrid,
    },
  })
  export default class Calendar extends Vue {

    @Mutation
    private goToMonth!: (payload: { year: number, month: number }) => void;

    public beforeRouteUpdate(to: Route,
                             from: Route,
                             next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void): void {
      const {year: newYear, month: newMonth} = to.params;
      this.goToMonth({year: Number(newYear), month: Number(newMonth)});
      next();
    }
  }
</script>

<style lang="scss" scoped>

</style>
