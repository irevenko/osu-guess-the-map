<template>
  <div>
   <MapCard/>
  </div>
</template>

<script>
import MapCard from '../components/MapCard.vue';

export default {
  name: 'Home',

  components: {
    MapCard,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #map-card {
    width: 250px;
  }
</style>
