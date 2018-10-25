<template>
  <v-content id="main">
    <v-container id="cal-grid" fluid fill-height>
      <DayHeader v-for="(dayHeader, index) in weekdayNames" :key="dayHeaderKey(index)" :label="dayHeader"></DayHeader>
      <DaySlot v-for="(daySlot, index) in daysOfMonth" :key="daySlotKey(index)" :label="daySlot"></DaySlot>
    </v-container>
  </v-content>
</template>

<script>
import DayHeader from '@/components/calendar/DayHeader.vue';
import DaySlot from '@/components/calendar/DaySlot.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    DayHeader,
    DaySlot,
  },
  computed: {
    ...mapGetters([
      'weekdayNames',
      'daysOfMonth',
    ]),
  },
  methods: {
    dayHeaderKey(index) {
      return `day-header-${index}`;
    },
    daySlotKey(index) {
      return `day-slot-${index}`;
    },
  },
};
</script>
<style lang="scss" scoped>
  #main {
    background-color: #E8EAF6; // Vuetify theme 'base'
  }

  #cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: [header-start] 1.5em [header-end] repeat(6, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    padding-bottom: 5em;
  }
</style>
