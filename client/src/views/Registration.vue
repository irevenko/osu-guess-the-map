<template>
  <div class="w-full max-w-xs mx-auto container mt-5">
    <p class="text-2xl text-center">Registration</p>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  v-on:submit.prevent="preventForm">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Enter your Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2
      px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline" id="username" name="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <p class="text-red-500 text-xs italic">
        Registration is for displaying your name in Leaderboard
      </p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-pink-500 hover:bg-pink-700 text-white mx-auto
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button" @click="getUsernameInput()">
        Sign up
      </button>
    </div>
  </form>
</div>
</template>

<script>
import {
  getUsernameInput,
} from '../../utils/MapsService';

export default {
  name: 'Registration',
  data: () => ({
    //
  }),
  methods: {
    getUsernameInput,
    preventForm(e) {
      e.preventDefault();
    },
  },
};
</script>
