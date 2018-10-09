<template>
  <v-content id="main">
    <v-container id="cal-grid" fluid fill-height>
      <!-- TODO  -->
      <DayHeader v-for="(dayHeader, index) in weekdayNames" :key="dayHeaderKey(index)" :label="dayHeader"></DayHeader>
      <DaySlot v-for="(daySlot, index) in daysOfMonth" :key="daySlotKey(index)" :label="daySlot"></DaySlot>
    </v-container>
  </v-content>
</template>

<!--suppress JSMismatchedCollectionQueryUpdate -->
<script lang="ts">
  import DayHeader from '@/components/calendar/DayHeader.vue';
  import DaySlot from '@/components/calendar/DaySlot.vue';
  import {Component, Vue} from 'vue-property-decorator';
  import {Getter} from 'vuex-class';

  @Component({
    components: {
      DayHeader,
      DaySlot,
    },
  })
  export default class CalendarGrid extends Vue {
    @Getter
    private weekdayNames!: string[];
    @Getter
    private daysOfMonth!: number[];

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    private dayHeaderKey(index: number): string {
      return `day-header-${index}`;
    }

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    private daySlotKey(index: number): string {
      return `day-slot-${index}`;
    }
  }
</script>

<style lang="scss" scoped>
  #cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: [header-start] 1em [header-end] repeat(6, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    padding-bottom: 5em;
  }
</style>
