<template>
  <v-bottom-sheet inset max-width="560px">
    <v-btn fab dark small color="accent" slot="activator">
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-list>
      <v-subheader>Calendar Settings</v-subheader>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Language</v-list-tile-title>
          <v-list-tile-sub-title>Language and locale of the calendar</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-select :items="locales"
                    :value="selectedLocale"
                    @change="updateLocale"
                    label="Language"
                    solo
                    light
          ></v-select>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
import { locales } from '@/store/common';

export default {
  name: 'Settings',
  data() {
    return {
      locales,
    };
  },
  computed: {
    selectedLocale() {
      return this.$store.state.options.locale;
    },
  },
  methods: {
    updateLocale(locale) {
      this.$store.commit('updateLocale', { locale });
    },
  },
};
</script>

<style scoped>

</style>
