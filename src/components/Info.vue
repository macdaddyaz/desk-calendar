<template>
  <v-hover>
    <v-card slot-scope="{hover}" flat color="transparent">
      <v-btn fab small color="secondary">
        <v-icon>info</v-icon>
      </v-btn>
      <v-slide-x-transition class="transition-fast-in-fast-out">
        <v-chip v-if="hover" color="secondary" outline>
          Desk Calendar, &copy; {{copyrightYear}} Eric McIntyre
        </v-chip>
      </v-slide-x-transition>
    </v-card>
  </v-hover>
</template>

<script>
import { YearAndMonth } from '@/store/common';

export default {
  data() {
    return {};
  },
  computed: {
    copyrightYear() {
      return YearAndMonth.current().year;
    },
  },
};
</script>

<style scoped>

</style>
