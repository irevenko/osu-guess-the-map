/* eslint-disable consistent-return */
import axios from 'axios';
import _ from 'lodash';

async function getMaps() {
  try {
    const res = await axios.get('http://localhost:4000/api/get/all_maps');
    const shuffledMaps = _.shuffle(res.data);
    const fiveMaps = shuffledMaps.slice(0, this.MAPS_NUMBER);
    this.maps = fiveMaps;
  } catch (err) {
    return err;
  }
}

function isValidMap(map) {
  return map && map.toString().trim() !== '';
}

function hasMapName(inputData, mapName) {
  if (inputData.toUpperCase().includes(mapName.toUpperCase())) {
    return true;
  }
}

function hasMapNameAndArtist(inputData, mapName, mapArtist) {
  if (inputData.toUpperCase().includes(mapName.toUpperCase())
      && inputData.toUpperCase().includes(mapArtist.toUpperCase())) {
    return true;
  }
}

async function getMapInput() {
  const formData = new FormData(document.querySelector('form'));
  const map = formData.get('map');
  try {
    const res = await axios.post('http://localhost:4000/api/post/submit', {
      map,
    });
    const usersGuess = res.data.map;
    if (isValidMap(usersGuess)) {
      if (hasMapNameAndArtist(usersGuess, this.mapName, this.mapArtist)) {
        this.isWrong = '';
        this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
        this.guessCounter += 2;
        this.pointsWon = '+2 points';
      } else if (hasMapName(usersGuess, this.mapName)) {
        this.isWrong = '';
        this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
        this.guessCounter += 1;
        this.pointsWon = '+1 point';
      } else {
        this.isWrong = `❌ Wrong. It is ${this.mapArtist} - ${this.mapName}`;
      }
    } else {
      this.isWrong = '⛔️ Input data is not valid! Try again 🔄.';
      document.querySelector('#submit-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      this.onOffSubmitBtn = false;
    }
  } catch (err) {
    return err;
  }
}

// eslint-disable-next-line import/prefer-default-export
export {
  getMapInput, getMaps, isValidMap,
};
