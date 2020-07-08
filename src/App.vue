<template>
  <div id="app">
    <Navbar />
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
import axios from 'axios';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    getMap() {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get('http://localhost:4000/');
          this.mapImage = res.data[Math.floor((Math.random() * 3) + 0)].image;
        } catch (err) {
          reject(err);
        }
      });
    },
  },
  data: () => ({
    mapImage: null,
  }),
};
</script>

<style>

</style>
