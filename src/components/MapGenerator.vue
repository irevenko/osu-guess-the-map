<template>
<div>
  <div class="mx-auto mt-5" style="width: 600px;">
    <div v-if="mapImage">
  <b-img :src="mapImage" fluid alt="Responsive image"></b-img>
    </div>
    <div>
  <b-form inline class="mx-auto" style="width: 440px;">
    <label class="sr-only" for="inline-form-input-username">Map Name</label>
      <b-input id="inline-form-input-username" placeholder="Map Name"></b-input>
    <b-button @click="getMap()" variant="primary">Submit</b-button>
  </b-form>
</div>
    </div>
  </div>
</template>

<script>
import getMap from '../../lib/MapsService';

export default {
  name: 'MapGenerator',
  methods: {
    getMap,
  },
  data: () => ({
    mapImage: null,
  }),
};
</script>
