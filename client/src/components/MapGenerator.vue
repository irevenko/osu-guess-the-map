<template>
<div>
  <button id="start-button"
  @click="getRandomMap();displayGame();">Start</button>
    <div v-if="mapImage">
  <img :src="mapImage" alt="Responsive image">
    </div>
    <input id="map-input" class="input" type="text" placeholder="Map name">
    <button id="map-button" @click="getRandomMap()">
      Submit
    </button>
  <span>{{ img }}</span>
 </div>
</template>

<script>
import {
  getRandomMap,
} from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  data: () => ({
    mapImage: null,
    img: null,
  }),
  methods: {
    getRandomMap,
    displayGame() {
      document.getElementById('map-input').style.display = 'block';
      document.getElementById('map-button').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
    },
  },
  mounted() {
    document.getElementById('map-input').style.display = 'none';
    document.getElementById('map-button').style.display = 'none';
  },
};
</script>
