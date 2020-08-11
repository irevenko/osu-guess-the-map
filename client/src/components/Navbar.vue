<template>
  <v-app-bar app color="pink lighten-3">
      <div class="d-flex align-center">
        <router-link to="/">
       <v-img alt="osu game logo" class="shrink mr-2" contain src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
       transition="scale-transition" width="58"/>
        </router-link>
        <h3 class="mr-2">Guess the map</h3>
      </div>
      <v-spacer></v-spacer>
      <v-btn :href="githubLink" target="_blank" text>
        <span class="text-lg-h6 mr-1">GH</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
  }),
};
</script>
