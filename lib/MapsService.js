/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
import axios from 'axios';

function getMap() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:4000/get_maps');
      const rand = Math.floor((Math.random() * 6) + 0);
      this.mapImage = res.data[rand].image;
      this.name = res.data[rand].name;
    } catch (err) {
      reject(err);
    }
  });
}

function getName() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:4000/get_maps');
    } catch (err) {
      reject(err);
    }
  });
}

async function compareLink() {
  const input = document.getElementById('map-input');
  if (input.value === this.name) {
    this.isRight = 'Yes';
  } else {
    this.isRight = 'No';
  }
}

export { getName, getMap, compareLink };
