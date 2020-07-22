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
    } catch (err) {
      reject(err);
    }
  });
}

// eslint-disable-next-line import/prefer-default-export
export { getRandomMap };
