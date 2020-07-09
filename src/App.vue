<template>
  <div id="app">
    <Navbar />
    <MapGenerator />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MapGenerator from './components/MapGenerator.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MapGenerator,
  },
  data: () => ({
    mapImage: null,
  }),
};
</script>

<style>

</style>
