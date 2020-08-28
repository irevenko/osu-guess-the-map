/* eslint-disable consistent-return */
import axios from 'axios';
import _ from 'lodash';

async function getMaps() {
  try {
    const res = await axios.get('http://localhost:4000/api/get/all_maps');
    const shuffledMaps = _.shuffle(res.data);
    const someMaps = shuffledMaps.slice(0, this.MAPS_NUMBER);
    this.maps = someMaps;
  } catch (err) {
    return err;
  }
}

export default getMaps;
