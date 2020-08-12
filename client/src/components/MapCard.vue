<template>
   <div class="w-64 mt-5 rounded overflow-hidden shadow-lg mx-auto container">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190120%2Fourlarge%2Fpngtree-gallery-vector-icon-png-image_470660.jpg&f=1&nofb=1"
  alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Image Game</div>
    <p class="text-gray-700 text-base">
      Guess by image. No time limits
    </p>
  </div>
  <div class="px-6 py-4">
    <router-link to="/image_game">
    <span class="inline-block bg-gray-200
    rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    START
    </span>
    </router-link>
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
