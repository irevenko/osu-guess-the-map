<template>
<nav class="flex items-center justify-between flex-wrap bg-pink-500 p-5 h-24">
  <router-link to="/">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd3%2FOsu%2521Logo_%25282015%2529.png&f=1&nofb=1"
     alt="osu game logo" width="78">
    <span class="font-semibold text-xl tracking-tight ml-1 mb-1">guess the map</span>
  </div>
  </router-link>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border
    rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow
  lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    </div>
    <div>
      <a href="https://github.com/irevenko/osu-guess-the-map" target="_blank"
      class="inline-block text-sm px-4 py-2
      leading-none border rounded text-white border-white
       hover:border-transparent hover:text-pink-500 hover:bg-white mt-4
       lg:mt-0">Source Code</a>
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
