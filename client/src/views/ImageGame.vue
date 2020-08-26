<template>
<div class="text-center max-w-xl container mx-auto break-all">
  <div id="description" class="mt-4 text-base">
    <p class="text-2xl">{{ rulesHeading }}</p>
    <div class="mt-2">{{ rulesText1 }}</div>
    <div>{{ rulesText2 }}</div>
    <div>{{ rulesText3 }}</div>
    <div class="mb-4">{{ rulesText4 }}</div>
    <label for="user">
    {{ nameInfo }}
    </label>
    <form class="w-full max-w-sm mx-auto container">
      <div class="flex items-center border-b border-pink-500 py-2">
        <input name="username" class="appearance-none bg-transparent border-none w-full
          text-gray-700 mr-3 mt-1 py-1 px-2 leading-tight focus:outline-none"
          type="text" placeholder="Username" v-model="user">
      </div>
      <div>{{ nameText }}<span class="text-pink-500">{{ user }}</span></div>
      <div class="text-red-500">{{ userMsg }}</div>
      <div class="text-2xl mt-5">{{ settingsText }}</div>
    </form>
    <p class="mt-6">{{ howText1 }}</p>
    <input type="range" min="0" max="100" step="1" v-model="MAPS_NUMBER">
    <div class="text-pink-500 text-xl" v-text="MAPS_NUMBER"></div>
    <p>{{ howText2 }}</p>
    <input type="range" min="0" max="100" step="1" v-model="secondsValue">
    <div class="text-pink-500 text-xl" v-text="secondsValue"></div>
    <p>{{ howText3 }}</p>
    <input type="range" min="0" max="50" step="1" v-model="blurValue">
    <div class="text-pink-500 text-xl" v-text="blurValue"></div>
  </div>
  <button id="start-button"
    class="mt-4 mb-10 bg-pink-500 hover:bg-pink-300 text-white font-bold px-4 py-2 rounded"
    @click="getMaps();setCurrentMap();displayGame();">
  {{ startText }}
  </button>
  <div v-if="mapImage">
    <img id="map-img" :src="mapImage" alt="Responsive image" width="730" class="mt-5">
  </div>
  <form id="map-form" v-on:submit.prevent="preventForm" autocomplete="off">
    <div
      class="flex items-center border-b border-b-2 border-pink-300 py-2">
      <input autofocus id="map-input" name="map" v-on:keyup.enter="submitForm"
        class="appearance-none bg-transparent border-none w-full
        text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text" placeholder="Map name" aria-label="Enter the map">
      <button id="submit-button" :disabled=onOffSubmitBtn
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
  <div class="text-xl" id="seconds-counter">
    {{ timeText }}<span class="text-pink-500"> {{ secondsToGuess }}</span>
  </div>
  <div id="score-counter">
    <div>
      <span>{{ mapText }}</span>
      <span class="text-pink-500"> {{ mapIndex }}/{{ MAPS_NUMBER }}</span>
    </div>
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
  getMapInput, getMaps, isValidMap, getUsernameInput,
} from '../../utils/MapsService';

export default {
  name: 'MapGenerator',
  data: () => ({
    user: 'Anonymous',
    userMsg: null,
    mapImage: null,
    mapName: null,
    mapArtist: null,
    isRight: null,
    isWrong: null,
    pointsWon: null,
    maps: [],
    mapIndex: 0,
    guessCounter: 0,
    secondsToGuess: 0,
    secondsValue: 15,
    blurValue: 0,
    onOffSubmitBtn: false,
    showRetryBtn: false,
    MAPS_NUMBER: 5,
    MAX_MAP_POINTS: 2,
    nextText: 'Next ➡️',
    submitText: 'Submit ⬅️',
    startText: 'Start  ▶️',
    retryText: 'Retry ⏏️',
    scoreText: '🏆 Score: ',
    timeText: '🕓 Time left: ',
    mapText: '🗺️ Map: ',
    settingsText: '🛠 Settings:',
    rulesHeading: '📃 Game Rules:',
    nameText: '🗣 Current name: ',
    howText1: 'How many maps do you want?',
    howText2: 'How many seconds do you need?',
    howText3: 'How hard do you want to blur the image?',
    nameInfo: 'Choose the name to display in leaderboard. Otherwise it will be Anonymous',
    rulesText1: 'If you guess the map name you get 1 point',
    rulesText2: 'If you guess the map artist and map name you get 2 points',
    rulesText3: 'Enter map how you want but it must include Name or Artist or Both in any Case',
    rulesText4: 'For instance: reol no title, NO TITLE REOL, Reol - No Title, no title, No TiTLe',
  }),
  methods: {
    getMapInput,
    getMaps,
    getUsernameInput,
    isValidMap,
    async setCurrentMap() {
      document.querySelector('input').focus();
      setTimeout(() => {
        this.mapImage = this.maps[this.mapIndex].image;
        this.mapName = this.maps[this.mapIndex].name;
        this.mapArtist = this.maps[this.mapIndex].artist;
        this.secondsToGuess = this.secondsValue;
        this.launchTimer();
        this.mapIndex += 1;
        setTimeout(() => {
          document.getElementById('map-img').style.setProperty('filter', `blur(${this.blurValue}px)`);
        }, 20);
      }, 200);
    },
    checkMapIndex() {
      if (this.mapIndex >= this.MAPS_NUMBER) {
        this.displayScoreScreen();
      }
    },
    launchTimer() {
      const timer = setInterval(() => {
        this.secondsToGuess -= 1;
        if (this.secondsToGuess < 1) {
          clearInterval(timer);
          this.disableSubmitBtn();
          this.isWrong = `❗️ It is ${this.mapArtist} - ${this.mapName}`;
        }
      }, 1000);
      document.getElementById('next-button').addEventListener('click', () => {
        clearInterval(timer);
      });
      document.getElementById('submit-button').addEventListener('click', () => {
        clearTimeout(timer);
      });
    },
    resetGame() {
      this.showRetryBtn = false;
      this.isRight = '';
      this.pointsWon = '';
      this.mapIndex = 0;
      this.guessCounter = 0;
      this.maps = [];
      this.getMaps();
      this.displayGame();
      this.setCurrentMap();
    },
    displayGame() {
      document.querySelector('#map-form').style.display = 'block';
      document.querySelector('input').focus();
      document.querySelector('#next-button').style.display = 'block';
      document.querySelector('#score-counter').style.display = 'block';
      document.querySelector('#seconds-counter').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
      document.getElementById('description').style.display = 'none';
    },
    hideGame() {
      document.querySelector('#map-form').style.display = 'none';
      document.querySelector('#score-counter').style.display = 'none';
      document.querySelector('#next-button').style.display = 'none';
      document.querySelector('#seconds-counter').style.display = 'none';
    },
    displayScoreScreen() {
      document.querySelector('#score-counter').style.display = 'none';
      document.querySelector('#map-form').style.display = 'none';
      document.querySelector('#next-button').style.display = 'none';
      document.querySelector('#seconds-counter').style.display = 'none';
      this.mapImage = null;
      this.showRetryBtn = true;
      this.isRight = `👤 ${this.user} 🎖 Has scored: ${this.guessCounter}`;
    },
    enableSubmitBtn() {
      this.onOffSubmitBtn = false;
      document.querySelector('#submit-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      this.isWrong = '';
    },
    disableSubmitBtn() {
      this.onOffSubmitBtn = true;
      document.querySelector('#submit-button').className = 'flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-gray-500 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded';
    },
    preventForm(e) {
      e.preventDefault();
    },
    submitForm() {
      document.getElementById('submit-button').click();
    },
    clearInput() {
      this.isRight = '';
      this.isWrong = '';
      this.pointsWon = '';
      document.getElementById('map-input').value = '';
    },
    validateUser(value) {
      if (value.trim() === '') {
        this.userMsg = '❗️ Please choose a name';
        document.getElementById('start-button').disabled = true;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-gray-500 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded';
      } else {
        this.userMsg = '';
        document.getElementById('start-button').disabled = false;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      }
    },
  },
  watch: {
    user(value) {
      this.user = value;
      this.validateUser(value);
    },
  },
  mounted() {
    this.hideGame();
    document.querySelector('input').focus();
  },
};
</script>
