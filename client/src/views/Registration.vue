<template>
  <div class="w-full max-w-xs mx-auto container mt-5">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2
      px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2"
      for="password">
        Password
      </label>
      <input class="shadow appearance-none
      rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
      focus:outline-none focus:shadow-outline" id="password"
      type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">
        Registration is for displaying your name in Leaderboard
      </p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-pink-500 hover:bg-pink-700 text-white
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button">
        Sign up
      </button>
      <router-link to="/login">
      <a class="inline-block align-baseline font-bold text-sm
       text-pink-500 hover:text-pink-800" href="#">
        Or Sign In
      </a>
      </router-link>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Registration',
  data: () => ({
    //
  }),
};
</script>
