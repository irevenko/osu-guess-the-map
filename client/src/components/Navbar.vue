<template>
<nav class="flex items-center justify-between flex-wrap bg-pink-500 p-5 h-26">
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
    <router-link to="/leaderboard">
      <a href="#responsive-header"
      class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        🥇 Leaderboard
      </a>
      </router-link>
          <router-link to="/register">
      <a href="#responsive-header"
      class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        🖊 Sign Up
      </a>
      </router-link>
    </div>
    <div>
      <button class="bg-pink-400 hover:bg-pink-300 text-white
      font-bold py-2 px-4 border-b-4 border-pink-700
      hover:border-pink-500 rounded inline-flex items-center">
  <img width="30" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.abarrak.com%2Fpublic%2Ficons%2Fgithub-icon.png&f=1&nofb=1" alt="">
  <span><a class="ml-1" href="https://github.com/irevenko/osu-guess-the-map" target="_blank">Source Code</a></span>
</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    //
  }),
};
</script>
