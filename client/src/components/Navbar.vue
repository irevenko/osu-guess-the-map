<template>
  <nav
  class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <img width="70" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
  alt="osu logo" class="mr-2">
  <div
  class="flex items-center flex-shrink-0 text-white mr-6">
    <span
    class="font-semibold text-xl tracking-tight">Guess the map</span>
  </div>
  <div class="block lg:hidden">
    <button
    class="flex items-center px-3 py-2
    border rounded text-teal-200 border-teal-400 hover:text-white
     hover:border-white">
      <svg
      class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex
  lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block
      lg:mt-0 text-teal-200 hover:text-white mr-4">
        Anything
      </a>
    </div>
    <div>
      <a href="https://github.com/irevenko/osu-guess-the-map" class="inline-block bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 blue-400 hover:border-blue-100 rounded" target="_blank">
        <img width=28 class="inline-block" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_4266.png&f=1&nofb=1">
         Source Code
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
  }),
};
</script>
