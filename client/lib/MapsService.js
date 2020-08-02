/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
import axios from 'axios';

function getRandomMap() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:4000/get_random_map');
      this.mapImage = res.data.image;
      this.mapName = res.data.name;
    } catch (err) {
      reject(err);
    }
  });
}

function getFiveMaps() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:4000/get_all_maps');
      this.maps = res.data;
    } catch (err) {
      reject(err);
    }
  });
}

function isValidMap(map) {
  return map && map.toString().trim() !== '';
}

function getMapInput() {
  const formData = new FormData(document.querySelector('form'));
  const map = formData.get('map');
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post('http://localhost:4000/submit', {
        map,
      });
      if (isValidMap(this.mapName)) {
        if (res.data.map === this.mapName) {
          this.isRight = '✔️ Right ';
          this.guessCounter += 1;
        } else {
          this.isWrong = `❌ Wrong. It is ${this.mapName}`;
        }
      }
      this.isRight = 'Input data is invalid!';
    } catch (err) {
      reject(err);
    }
  });
}

// eslint-disable-next-line import/prefer-default-export
export { getRandomMap, getMapInput, getFiveMaps };
