<template>
<div class="mt-5 text-center max-w-xl container mx-auto break-all">
  <div id="description" class="mt-16">
    {{ rulesText }}
  </div>
  <button id="start-button"
  class="mt-4 bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded"
  @click="getFiveMaps();setCurrentMap();displayGame();">
    {{ startText }}
  </button>
    <div v-if="mapImage">
  <img :src="mapImage" alt="Responsive image" width="640">
    </div>
    <form class="w-full max-w-lg" v-on:submit.prevent="preventForm" autocomplete="off">
  <div
  class="flex items-center border-b border-b-2 border-pink-300 py-2">
    <input id="map-input" name="map" v-on:keyup.enter="submitForm"
    class="appearance-none bg-transparent border-none w-full
    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    type="text" placeholder="Map name" aria-label="Enter the map">
    <button id="map-button" :disabled=onOffSubmitBtn
    class="flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500
    hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded"
    type="button" @click="getMapInput();disableSubmitBtn();">
      {{ submitText }}
    </button>
  </div>
</form>
<div class="text-green-500">{{ isRight }} </div>
<div class="text-red-500">{{ isWrong }} </div>
<div class="text-pink-500">{{ pointsWon }} </div>
<div id="score-counter">
  <span>{{ scoreText }}</span>
  <span class="text-pink-500"> {{ guessCounter }}/{{ MAPS_NUMBER * MAX_MAP_POINTS }}</span>
</div>
  <button id="next-button"
  class="mx-auto mt-5 bg-pink-500 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
  @click="clearInput();checkMapIndex();setCurrentMap();enableSubmitBtn();">
    {{ nextText }}
  </button>
    <div v-if="showRetryBtn">
    <button id="retry-button"
  class="mx-auto mt-5 bg-pink-500 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
  @click="resetGame();">
    {{ retryText }}
  </button>
    </div>
 </div>
</template>

<script>
import {
  getMapInput, getFiveMaps, isValidMap,
} from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  data: () => ({
    mapImage: null,
    mapName: null,
    mapArtist: null,
    isRight: null,
    isWrong: null,
    pointsWon: null,
    maps: [],
    mapIndex: 0,
    guessCounter: 0,
    onOffSubmitBtn: false,
    showRetryBtn: false,
    MAPS_NUMBER: 5,
    MAX_MAP_POINTS: 2,
    nextText: 'Next ➡️',
    submitText: 'Submit ⬅️',
    startText: 'Start  ▶️',
    retryText: 'Retry ⏏️',
    scoreText: 'Score: ',
    rulesText: 'If you guess the map name you get 1 point. If you guess artist and song name you get 2 points. Enter map data like this: Artist - Song name OR artist-song name OR song name',
  }),
  methods: {
    getMapInput,
    getFiveMaps,
    isValidMap,
    setCurrentMap() {
      setTimeout(() => {
        this.mapImage = this.maps[this.mapIndex].image;
        this.mapName = this.maps[this.mapIndex].name;
        this.mapArtist = this.maps[this.mapIndex].artist;
        this.mapIndex += 1;
      }, 200);
    },
    checkMapIndex() {
      if (this.mapIndex === this.MAPS_NUMBER) {
        document.querySelector('#score-counter').style.display = 'none';
        document.querySelector('.max-w-lg').style.display = 'none';
        document.querySelector('#next-button').style.display = 'none';
        this.mapImage = null;
        this.showRetryBtn = true;
        this.isRight = `Scored: ${this.guessCounter}`;
      }
    },
    resetGame() {
      this.showRetryBtn = false;
      this.isRight = '';
      this.pointsWon = '';
      this.mapIndex = 0;
      this.guessCounter = 0;
      this.maps = [];
      this.getFiveMaps();
      this.displayGame();
      this.setCurrentMap();
    },
    displayGame() {
      document.querySelector('.max-w-lg').style.display = 'block';
      document.querySelector('#next-button').style.display = 'block';
      document.querySelector('#score-counter').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
      document.getElementById('description').style.display = 'none';
    },
    hideGame() {
      document.querySelector('.max-w-lg').style.display = 'none';
      document.querySelector('#score-counter').style.display = 'none';
      document.querySelector('#next-button').style.display = 'none';
    },
    enableSubmitBtn() {
      this.onOffSubmitBtn = false;
      this.isWrong = '';
    },
    disableSubmitBtn() {
      this.onOffSubmitBtn = true;
    },
    preventForm(e) {
      e.preventDefault();
    },
    submitForm() {
      document.getElementById('map-button').click();
    },
    clearInput() {
      this.isRight = '';
      this.isWrong = '';
      this.pointsWon = '';
      document.getElementById('map-input').value = '';
    },
  },
  mounted() {
    this.hideGame();
  },
};
</script>
