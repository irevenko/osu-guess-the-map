<template>
<div>
  <table class="table-fixed container mx-auto mt-1">
  <thead>
    <tr>
      <th class="w-1/4 px-4 py-2">№</th>
      <th class="w-1/2 px-4 py-2">Username</th>
      <th class="w-1/4 px-4 py-2">Score</th>
      <th class="w-1/2 px-4 py-2">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="score in scores" :key="score">
      <td class="border px-4 py-2">{{ scores.indexOf(score) + 1 }}</td>
      <td class="break-words border px-4 py-2 text-pink-600">{{ score.user }}</td>
      <td class="border px-4 py-2">{{ score.points }}</td>
      <td class="border px-4 py-2">{{ score.date }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import { getScores } from '../../utils/MapsService';

export default {
  name: 'Leaderboard',
  data: () => ({
    scores: [],
  }),
  methods: {
    getScores,
  },
  mounted() {
    this.getScores();
  },
};
</script>
