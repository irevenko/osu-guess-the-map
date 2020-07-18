<template>
<div>
    <div v-if="mapImage" class="container">
  <img :src="mapImage" alt="Responsive image">
    </div>
    <div class="container">
      <input class="input" type="text" placeholder="Map Name">
      <button  class="button is-warning" @click="getMap()">Submit</button>
  <div>{{ name }}</div>
</div>
    </div>
</template>

<script>
import { getMap, getName } from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  methods: {
    getMap,
    getName,
  },
  data: () => ({
    mapImage: null,
    name: null,
  }),
};
</script>
