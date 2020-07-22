<template>
  <div id="app">
    <Navbar />
    <MapGenerator />
  </div>
</template>

<script>
import MapGenerator from './components/MapGenerator.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    MapGenerator,
    Navbar,
  },
  data: () => ({
  }),
};
</script>

<style>
</style>
