/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
import axios from 'axios';
import _ from 'lodash';

async function getFiveMaps() {
  try {
    const res = await axios.get('http://localhost:4000/api/get/all_maps');
    const shuffledMaps = _.shuffle(res.data);
    this.maps = shuffledMaps;
  } catch (err) {
    return err;
  }
}

function isValidMap(map) {
  return map && map.toString().trim() !== '';
}

function processInputData(mapData) {
  if (mapData.includes('-')) {
    const rawInputData = mapData.toLowerCase().split('-');
    const rawArtistGuess = rawInputData[0];
    let artistGuess = rawArtistGuess.split(' ').filter((item) => item !== '');
    artistGuess = artistGuess.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
    const validArtistGuess = artistGuess.toString().replace(new RegExp(',', 'g'), ' ').trim();
    const rawNameGuess = rawInputData[1];
    let nameGuess = rawNameGuess.split(' ').filter((item) => item !== '');
    nameGuess = nameGuess.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
    const validNameGuess = nameGuess.toString().replace(new RegExp(',', 'g'), ' ').trim();
    return `${validArtistGuess} - ${validNameGuess}`;
  } else {
    const rawNameGuess = mapData.toLowerCase().split(' ');
    const nameGuess = rawNameGuess.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
    const validNameGuess = nameGuess.toString().replace(new RegExp(',', 'g'), ' ').trim();
    return validNameGuess;
  }
}

async function getMapInput() {
  const formData = new FormData(document.querySelector('form'));
  const map = formData.get('map');
  try {
    const res = await axios.post('http://localhost:4000/api/post/submit', {
      map,
    });
    if (isValidMap(res.data.map)) {
      if (processInputData(res.data.map) === `${this.mapName}`) {
        this.isWrong = '';
        this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
        this.guessCounter += 1;
        this.pointsWon = '+1 point';
      } else if (processInputData(res.data.map) === `${this.mapArtist} - ${this.mapName}`) {
        this.isWrong = '';
        this.isRight = `✔️ Correct. It is ${this.mapArtist} - ${this.mapName}`;
        this.guessCounter += 2;
        this.pointsWon = '+2 points';
      } else {
        this.isWrong = `❌ Wrong. It is ${this.mapArtist} - ${this.mapName}`;
      }
    } else {
      this.isWrong = '⛔️ Input data is not valid! Try again 🔄.';
      document.querySelector('#map-button').className = 'flex-shrink-0 bg-pink-500 hover:bg-pink-400 border-pink-500 hover:border-pink-400 text-sm border-4 text-white py-1 px-2 rounded';
      this.onOffSubmitBtn = false;
    }
  } catch (err) {
    return err;
  }
}

// eslint-disable-next-line import/prefer-default-export
export {
  getMapInput, getFiveMaps, isValidMap,
};
