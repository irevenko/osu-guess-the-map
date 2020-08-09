<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
   <Navbar/>
   <MapGenerator/>
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
