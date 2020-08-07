/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import _ from 'lodash';

async function getFiveMaps() {
  try {
    const res = await axios.get('http://localhost:4000/get_all_maps');
    const shuffledMaps = _.shuffle(res.data);
    this.maps = shuffledMaps;
  } catch (err) {
    return err;
  }
}

function isValidMap(map) {
  return map && map.toString().trim() !== '';
}

async function getMapInput() {
  const formData = new FormData(document.querySelector('form'));
  const map = formData.get('map');
  try {
    const res = await axios.post('http://localhost:4000/submit', {
      map,
    });
    if (isValidMap(res.data.map)) {
      const rawNameGuess = res.data.map.toLowerCase().split(' ');
      const nameGuess = rawNameGuess.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
      const validNameGuess = nameGuess.toString().replace(new RegExp(',', 'g'), ' ').trim();
      const rawArtistInput = res.data.map.toLowerCase().split('-');
      const rawArtistGuess = rawArtistInput[0];
      let artistGuess = rawArtistGuess.split(' ').filter((item) => item !== '');
      artistGuess = artistGuess.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
      const validArtistGuess = artistGuess.toString().replace(new RegExp(',', 'g'), ' ').trim();
      console.log(validArtistGuess);
      console.log(validNameGuess);
      if (`${validArtistGuess} - ${validNameGuess}` === `${this.mapArtist} - ${this.mapName}`) {
        this.isWrong = '';
        this.isRight = '✔️ Right ';
        this.guessCounter += 1;
      } else {
        this.isWrong = `❌ Wrong. It is ${this.mapArtist} - ${this.mapName}`;
      }
    } else {
      this.isWrong = 'Input data is not valid! Try again.';
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
