/* eslint-disable no-param-reassign */
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
function getMap() {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:4000/');
      this.mapImage = res.data[Math.floor((Math.random() * 6) + 0)].image;
    } catch (err) {
      reject(err);
    }
  });
}

export default getMap;
