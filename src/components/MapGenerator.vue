<template>
<div class="container">
  <button id="start-button" class="button is-danger" @click="getMap();displayGame()">Start</button>
    <div v-if="mapImage" class="container">
  <img :src="mapImage" alt="Responsive image">
    </div>
    <div class="container">
<div class="field has-addons">
  <div class="control">
    <input id="map-input" class="input" type="text" placeholder="Map name">
  </div>
  <div class="control">
    <a class="button is-warning" id="map-button" @click="compareLink();getMap()">
      Submit
    </a>
  </div>
</div>
  <div>{{ name }}</div>
  <div>{{ isRight }}</div>
</div>
    </div>
</template>

<script>
import { getMap, getName, compareLink } from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  data: () => ({
    mapImage: null,
    name: null,
    isRight: null,
  }),
  methods: {
    getMap,
    getName,
    compareLink,
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
