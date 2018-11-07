<template>
  <v-hover>
    <v-card slot-scope="{hover}" flat color="transparent">
      <v-dialog v-model="showAbout" width="60%">
        <v-btn fab small color="secondary" slot="activator">
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-card>
          <v-card-title class="headline accent" color="accent" primary-title>Desk Calendar</v-card-title>
          <v-card-text>
            <h3 class="subheading">A desk calendar, built with <a href="https://vuejs.org/">Vue.js</a>.</h3>
            <v-divider></v-divider>
            <div class="body-1 content">
              Desk Calendar is a small application that, cleverly enough, puts a desk calendar in your browser. It shows
              the months as a desk or wall calendar would, allowing navigation from month to month.
            </div>
            <div class="body-1 content">
              While providing real functionality, it's primary purpose is to act as a self-tutorial and test bed of some
              modern web development technologies.
            </div>
            <div class="body-1 content">
              I chose a desk calendar for a few reasons. For one, I'm fascinated by time and dates and calendars. Also,
              it's a nice simple problem domain that I understand well. At the same time, it presents some interesting
              implementation challenges.
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn small round color="primary" href="https://github.com/macdaddyaz/desk-calendar" target="_blank">
              <v-icon>mdi-github-circle</v-icon>
              GitHub Project
            </v-btn>
            <v-btn small round color="secondary" href="https://www.linkedin.com/in/ericmcintyre/" target="_blank">
              <v-icon>mdi-linkedin-box</v-icon>
              LinkedIn profile
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="showAbout = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    return {
      showAbout: false,
    };
  },
  computed: {
    copyrightYear() {
      return YearAndMonth.current().year;
    },
  },
};
</script>

<style scoped>
.content {
  padding-top: 8px;
}
</style>
