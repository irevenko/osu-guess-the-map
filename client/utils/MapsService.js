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

async function getScores() {
  try {
    const res = await axios.get('http://localhost:4000/api/get/all_scores');
    this.scores = res.data.sort((a, b) => b.points - a.points).slice(0, 10);
  } catch (err) {
    return err;
  }
}

async function submitScore() {
  try {
    const points = this.guessCounter;
    const { user } = this;
    const date = new Date().toLocaleString();
    const res = await axios.post('http://localhost:4000/api/post/submit_lb', {
      points,
      user,
      date,
    });
    console.log(res);
  } catch (err) {
    return err;
  }
}

export { getMaps, submitScore, getScores };
