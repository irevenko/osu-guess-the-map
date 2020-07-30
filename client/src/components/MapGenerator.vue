<template>
<div class="mt-5 text-center max-w-xl container mx-auto break-all">
  <button id="start-button"
  class="bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded"
  @click="getRandomMap();displayGame();">
    Start
  </button>
    <div v-if="mapImage">
  <img :src="mapImage" alt="Responsive image" width="640">
    </div>
    <form class="w-full max-w-lg">
  <div
  class="flex items-center border-b border-b-2 border-pink-300 py-2">
    <input id="map-input" name="map"
    class="appearance-none bg-transparent border-none w-full
    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    type="text" placeholder="Map name" aria-label="Enter the map">
    <button id="map-button" :disabled=enableDisable
    class="flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500
    hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded"
    type="button" @click="count();getMapInput();enableDisable=true">
      Submit
    </button>
  </div>
</form>
<div>{{ isRight }}</div>
<div>{{ count() }}</div>
  <button id="next-button"
  class="mx-auto mt-5 bg-pink-500 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
  @click="clearAnswer();enableDisable=false;getRandomMap();">
    Next
  </button>
 </div>
</template>

<script>
import {
  getRandomMap, getMapInput,
} from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  data: () => ({
    mapImage: null,
    mapName: null,
    inputVal: null,
    isRight: null,
    enableDisable: false,
  }),
  methods: {
    getRandomMap,
    getMapInput,
    clearAnswer() {
      this.isRight = '';
      document.getElementById('map-input').value = '';
    },
    displayGame() {
      document.querySelector('.max-w-lg').style.display = 'block';
      document.querySelector('#next-button').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
    },
  },
  mounted() {
    document.querySelector('.max-w-lg').style.display = 'none';
    document.querySelector('#next-button').style.display = 'none';
  },
};
</script>
