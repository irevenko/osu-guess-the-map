<template>
<v-container>
<div class="mt-10">
  <div id="description">
    {{ rulesText }}
  </div>
  <v-btn depressed small color="pink" id="start-button"
  @click="getFiveMaps();setCurrentMap();displayGame();">
    {{ startText }}
  </v-btn>
    <div v-if="mapImage">
  <img :src="mapImage" alt="Responsive image" width="640">
    </div>
    <v-form v-on:submit.prevent="preventForm" autocomplete="off">
    <v-col cols="12" md="4">
      <v-row>
    <v-text-field
      color="pink"
      id="map-input"  v-on:keyup.enter="submitForm"
      placeholder="Map name"
      name="map" label="Map name" required>
    </v-text-field>
    <v-btn depressed small color="pink lighten-4"
      id="map-button" :disabled=onOffSubmitBtn
      @click="getMapInput();disableSubmitBtn();"
    >{{ submitText }}
    </v-btn>
      </v-row>
    </v-col>
</v-form>
<div>{{ isRight }} </div>
<div>{{ isWrong }} </div>
<div>{{ pointsWon }} </div>
<div id="score-counter">
  <span>{{ scoreText }}</span>
  <span class="text-pink-500"> {{ guessCounter }}/{{ MAPS_NUMBER * MAX_MAP_POINTS }}</span>
</div>
  <v-btn depressed small color="pink lighten-4" id="next-button"
  @click="clearInput();checkMapIndex();setCurrentMap();enableSubmitBtn();">
    {{ nextText }}
  </v-btn>
    <div v-if="showRetryBtn">
    <button id="retry-button" @click="resetGame();">
    {{ retryText }}
  </button>
    </div>
 </div>
 </v-container>
</template>

<script>
import {
  getMapInput, getFiveMaps, isValidMap,
} from '../../lib/MapsService';

export default {
  name: 'ImageGame',
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
      document.querySelector('form').style.display = 'block';
      document.querySelector('#next-button').style.display = 'block';
      document.querySelector('#score-counter').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
      document.getElementById('description').style.display = 'none';
    },
    hideGame() {
      document.querySelector('form').style.display = 'none';
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

<style scoped>
  #map-input {
    width: 100px !important;
    max-width: 100px !important;
  }
</style>
