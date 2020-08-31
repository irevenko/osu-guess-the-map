<template>
  <div id="main" class="flex items-center flex-wrap">
    <div id="image-card"
      class="inline w-64 mt-5 rounded overflow-hidden shadow-lg">
      <img src="../assets/img_game.png"
        alt="image game logo" width="340">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ imgText1 }}</div>
        <p class="text-gray-700 text-base">
          {{ imgText2 }}
        </p>
      </div>
      <div class="px-6 py-4 mx-auto container">
        <router-link to="/image_game">
          <span class="inline-block bg-pink-400 container text-center
            rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          {{ gameLink }}
          </span>
        </router-link>
      </div>
    </div>
    <div id="audio-card"
      class="inline w-64 mt-5 rounded overflow-hidden shadow-lg">
      <img src="../assets/audio_game.webp"
        alt="audio game logo" width="340">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ audioText1 }}</div>
        <p class="text-gray-700 text-base">
          {{ audioText2 }}
        </p>
      </div>
      <div class="px-6 py-4 mx-auto container">
        <router-link to="/audio_game">
          <span class="inline-block bg-pink-400 container text-center
            rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          {{ gameLink }}
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
    gameLink: 'GAME LINK',
    imgText1: '🖼️ Image Game',
    imgText2: 'Guess by image 📷',
    audioText1: '🎶 Audio Game',
    audioText2: 'Guess by audio 🎵',
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
