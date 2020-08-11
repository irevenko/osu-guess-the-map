<template>
   <v-card class="mx-auto mt-10" max-width="400">
    <v-img
      class="white--text align-end"
      height="150px"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190120%2Fourlarge%2Fpngtree-gallery-vector-icon-png-image_470660.jpg&f=1&nofb=1"
    >
      <v-card-title class="pink--text text--lighten-2">Usual image game</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>Guess by image. No time limits</div>
    </v-card-text>

    <v-card-actions>
      <router-link to="/image_game">
      <v-btn color="pink" text>
        Start
      </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MapCard.vue',
  data: () => ({
  }),
};
</script>
