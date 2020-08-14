<template>
<div id="main">
   <div id="image-card"
   class="inline w-64 mt-5 rounded overflow-hidden shadow-lg mx-auto container">
  <img src="https://cdn.onlinewebfonts.com/svg/img_357713.png"
  alt="Sunset in the mountains" width="340">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Image Game</div>
    <p class="text-gray-700 text-base">
      Guess by image
    </p>
    <p class="text-gray-700 text-base">
      No time limits
    </p>
  </div>
  <div class="px-6 py-4 mx-auto container">
    <router-link to="/image_game">
    <span class="inline-block bg-pink-400 container text-center
    rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
    GAME LINK
    </span>
    </router-link>
  </div>
  </div>

     <div id="audio-card"
     class="ml-10 inline w-64 mt-5 rounded overflow-hidden shadow-lg mx-auto container">
  <img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519586-083_Music-512.png"
  alt="Sunset in the mountains" width="340">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Audio Game</div>
    <p class="text-gray-700 text-base">
      Guess by audio
    </p>
    <p class="text-gray-700 text-base">
      No time limits
    </p>
  </div>
  <div class="px-6 py-4 mx-auto container">
    <router-link to="/audio_game">
    <span class="inline-block bg-pink-400 container text-center
    rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
    GAME LINK
    </span>
    </router-link>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MapCard.vue',
  data: () => ({
  }),
};
</script>

<style scoped>
  div.inline { float:left; }
  #main {
    width: 50%;
    margin: 0 auto;
  }
</style>
