<template>
  <v-content id="main">
    <v-container id="cal-grid" fluid fill-height>
      <!-- TODO  -->
      <DayHeader v-for="(dayHeader, index) in dayHeaders" :id="'day-header-' + (index + 1)" :label="dayHeader"></DayHeader>
      <DaySlot v-for="(daySlot, index) in daySlots" :id="'day-slot-' + (index + 1)" :label="daySlot"></DaySlot>
    </v-container>
  </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DayHeader from '@/components/calendar/DayHeader.vue';
  import DaySlot from '@/components/calendar/DaySlot.vue';

  @Component({
    components: {
      DayHeader,
      DaySlot,
    },
  })
  export default class CalendarGrid extends Vue {
    // TODO Replace simple data with objects
    private dayHeaders: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private daySlots: string[] = Array(7 * 6);

    public created() {
      // TODO Remove after prototyping complete
      const start = 6;
      for (let i = start; i < (30 + start); i++) {
        this.daySlots[i] = `${i - start + 1}`;
      }
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
