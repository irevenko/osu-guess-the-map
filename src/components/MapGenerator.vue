<template>
<div>
    <div v-if="mapImage">
  <img :src="mapImage" alt="Responsive image">
    </div>
    <div>
      <input type="text" placeholder="Map Name">
      <button  @click="getMap()">Submit</button>
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
