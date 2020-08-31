<template>
<div class="text-center max-w-xl container mx-auto break-all">
  <div id="description" class="mt-4 text-base">
    <p class="text-2xl">{{ rulesHeading }}</p>
    <div class="mt-2">{{ rulesText1 }}</div>
    <div>{{ rulesText2 }}</div>
    <div>{{ rulesText3 }}</div>
    <div class="mb-4">{{ rulesText4 }}</div>
    <label for="username">
    {{ nameInfo }}
    </label>
    <form class="w-full max-w-sm mx-auto container">
      <div class="flex items-center border-b border-pink-500 py-2">
        <input name="username" class="appearance-none bg-transparent border-none w-full
          text-gray-700 mr-3 mt-1 py-1 px-2 leading-tight focus:outline-none"
          type="text" placeholder="Username" v-model="userName">
      </div>
      <div>{{ nameText }}<span class="text-pink-500">{{ userName }}</span></div>
      <div class="text-red-500">{{ userErr }}</div>
      <div class="text-2xl mt-5">{{ settingsText }}</div>
    </form>
    <p class="mt-6">{{ howText1 }}</p>
    <div class="text-red-500">{{ mapErr }}</div>
    <input type="range" min="0" max="100" step="1" v-model="mapsNumber">
    <div class="text-pink-500 text-xl" v-text="mapsNumber"></div>
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
  <div class="mt-3 text-xl">{{ loadingText }}</div>
  <div v-if="mapImage">
    <img id="map-img" :src="mapImage" alt="map image" width="730" class="mt-5">
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
        type="button" @click="getMapInput();">
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
      <span class="text-pink-500"> {{ mapIndex }}/{{ mapsNumber }}</span>
    </div>
    <span>{{ scoreText }}</span>
    <span class="text-pink-500"> {{ guessCounter }}/{{ mapsNumber * MAX_MAP_POINTS }}</span>
  </div>
  <button id="next-button"
    class="mx-auto mt-5 bg-pink-500 hover:bg-pink-400 text-white font-bold px-4 py-2 rounded"
    @click="clearInput();checkMapIndex();setCurrentMap();enableSubmitBtn();">
  {{ nextText }}
  </button>
  <div id="score-screen" class="mt-10 text-lg">
    <p class="mb-1 text-pink-500">{{ userEmoji }} {{ userName }}</p>
    <p>{{ hasScored }} <span class="text-pink-500">{{ guessCounter }}</span> {{ points }}</p>
    <button @click="submitScore();disableLeaderboardBtn();"
    class="mt-4 mb-3 flex-shrink-0 bg-pink-500
    hover:bg-pink-400 border-pink-500 hover:border-pink-400
    text-sm border-4 text-white py-1 px-2 rounded" id="leaderboard-button">
    {{ leaderboardBtn }} </button>
  </div>
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
import { getMaps, submitScore } from '../../utils/MapsService';
/* eslint-disable consistent-return */

export default {
  name: 'MapGenerator',
  data: () => ({
    userName: 'Anonymous',
    userErr: null,
    mapErr: null,
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
    mapsNumber: 5,
    MAX_MAP_POINTS: 2,
    loadingText: null,
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
    hasScored: '🎖 Has scored:',
    userEmoji: '👤',
    points: 'points',
    leaderboardBtn: 'Save score to the leaderboard🥇 🥈 🥉',
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
    getMaps,
    submitScore,
    setCurrentMap() {
      document.querySelector('input').focus();
      setTimeout(() => {
        this.mapImage = this.maps[this.mapIndex].image;
        this.loadingText = '';
        this.mapName = this.maps[this.mapIndex].name;
        this.mapArtist = this.maps[this.mapIndex].artist;
        this.secondsToGuess = this.secondsValue;
        this.launchTimer();
        this.mapIndex += 1;
        setTimeout(() => {
          document.getElementById('map-img').style.setProperty('filter', `blur(${this.blurValue}px)`);
        }, 20);
      }, 750);
    },
    checkMapIndex() {
      if (this.mapIndex >= this.mapsNumber) {
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
        if (this.isRight || this.isWrong.includes('Wrong')) {
          clearTimeout(timer);
        }
      });
    },
    isValidInput(map) {
      return map && map.toString().trim() !== '';
    },
    hasMapName(inputData, mapName) {
      if (inputData.toUpperCase().includes(mapName.toUpperCase())) {
        return true;
      }
    },
    hasMapNameAndArtist(inputData, mapName, mapArtist) {
      if (inputData.toUpperCase().includes(mapName.toUpperCase())
        && inputData.toUpperCase().includes(mapArtist.toUpperCase())) {
        return true;
      }
    },
    getMapInput() {
      const formData = new FormData(document.querySelector('#map-form'));
      const usersGuess = formData.get('map');
      try {
        if (this.isValidInput(usersGuess)) {
          if (this.hasMapNameAndArtist(usersGuess, this.mapName, this.mapArtist)) {
            this.isWrong = '';
            this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
            this.guessCounter += 2;
            this.pointsWon = '+2 points';
            this.disableSubmitBtn();
          } else if (this.hasMapName(usersGuess, this.mapName)) {
            this.isWrong = '';
            this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
            this.guessCounter += 1;
            this.pointsWon = '+1 point';
            this.disableSubmitBtn();
          } else {
            this.isWrong = `❌ Wrong. It is ${this.mapArtist} - ${this.mapName}`;
            this.disableSubmitBtn();
          }
        } else {
          this.isWrong = '⛔️ Input data is not valid! Try again 🔄.';
        }
      } catch (err) {
        return err;
      }
    },
    getUsernameInput() {
      const formData = new FormData(document.querySelector('form'));
      const user = formData.get('username');
      try {
        if (this.isValidInput(user)) {
          this.userName = user;
        } else {
          this.wrongUserInput = '⛔️ Input data is not valid! Try again 🔄.';
        }
      } catch (err) {
        return err;
      }
    },
    resetGame() {
      document.querySelector('#score-screen').style.display = 'none';
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
      this.loadingText = 'Loading...';
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
      document.querySelector('#score-screen').style.display = 'none';
    },
    displayScoreScreen() {
      document.querySelector('#score-counter').style.display = 'none';
      document.querySelector('#map-form').style.display = 'none';
      document.querySelector('#next-button').style.display = 'none';
      document.querySelector('#seconds-counter').style.display = 'none';
      this.mapImage = null;
      this.showRetryBtn = true;
      document.querySelector('#score-screen').style.display = 'block';
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
    disableLeaderboardBtn() {
      document.getElementById('leaderboard-button').disabled = true;
      document.getElementById('leaderboard-button').className = 'mt-4 mb-3 flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-gray-500 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded';
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
    validateUserName(value) {
      if (value.trim() === '') {
        this.userErr = '❗️ Please choose a name';
        document.getElementById('start-button').disabled = true;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-gray-500 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded';
      } else {
        this.userErr = '';
        document.getElementById('start-button').disabled = false;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      }
    },
    validateMapsNumber(value) {
      if (value === '0') {
        this.mapErr = '❗️ Choose at least 1 map';
        document.getElementById('start-button').disabled = true;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-gray-500 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded';
      } else {
        this.mapErr = '';
        document.getElementById('start-button').disabled = false;
        document.querySelector('#start-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      }
    },
  },
  watch: {
    userName(value) {
      this.userName = value;
      this.validateUserName(value);
    },
    mapsNumber(value) {
      this.mapsNumber = value;
      this.validateMapsNumber(value);
    },
  },
  mounted() {
    this.hideGame();
    document.querySelector('input').focus();
  },
};
</script>
