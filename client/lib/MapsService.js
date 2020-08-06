/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
import axios from 'axios';

async function getFiveMaps() {
  try {
    const res = await axios.get('http://localhost:4000/get_all_maps');
    this.maps = await res.data;
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
      const rawInputData = res.data.map.toLowerCase().split(' ');
      const inputData = rawInputData.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
      const validInputData = inputData.toString().replace(new RegExp(',', 'g'), ' ').trim();
      if (validInputData === this.mapName) {
        this.isWrong = '';
        this.isRight = '✔️ Right ';
        this.guessCounter += 1;
      } else {
        this.isWrong = `❌ Wrong. It is ${this.mapName}`;
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
