/* eslint-disable consistent-return */
import axios from 'axios';
import _ from 'lodash';

async function getMaps() {
  try {
    const res = await axios.get('api/get/all_maps');
    const shuffledMaps = _.shuffle(res.data);
    const someMaps = shuffledMaps.slice(0, this.mapsNumber);
    this.maps = someMaps;
  } catch (err) {
    return err;
  }
}

async function getScores() {
  try {
    const res = await axios.get('api/get/all_scores');
    this.scores = res.data.sort((a, b) => b.points - a.points).slice(0, 100);
  } catch (err) {
    return err;
  }
}

async function submitScore() {
  try {
    const points = this.guessCounter;
    const { userName } = this;
    await axios.post('api/post/submit_lb', {
      points,
      userName,
    });
  } catch (err) {
    return err;
  }
}

export {
  getMaps, submitScore, getScores,
};
