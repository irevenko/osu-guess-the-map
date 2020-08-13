<template>
<div>
   <div class="w-64 mt-5 rounded overflow-hidden shadow-lg mx-auto container">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190120%2Fourlarge%2Fpngtree-gallery-vector-icon-png-image_470660.jpg&f=1&nofb=1"
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
</div>
</template>

<script>
export default {
  name: 'MapCard.vue',
  data: () => ({
  }),
};
</script>
