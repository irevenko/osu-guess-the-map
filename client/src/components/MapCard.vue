<template>
<div id="main" class="flex items-center flex-wrap">
   <div id="image-card"
   class="inline w-64 mt-5 rounded overflow-hidden shadow-lg">
  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Ficonsmind%2Foutline%2F512%2FPhotos-icon.png&f=1&nofb=1"
  alt="Sunset in the mountains" width="340">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">🖼️ Image Game</div>
    <p class="text-gray-700 text-base">
      Guess by image 📷
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
  class="inline w-64 mt-5 rounded overflow-hidden shadow-lg">
  <img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519586-083_Music-512.png"
  alt="Sunset in the mountains" width="340">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">🎶 Audio Game</div>
    <p class="text-gray-700 text-base">
      Guess by audio 🎵
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
