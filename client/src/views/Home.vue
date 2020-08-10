<template>
  <div id="map-card"
  class="mt-5 max-w-sm rounded overflow-hidden shadow-lg text-center container mx-auto">
   <div class="card" >
  <div class="card-content">
    <p class="title">
      Usual game
    </p>
    <p class="subtitle">
      Guess by map<br>
      No time limits
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <router-link to="/usual_game">
        Click
        </router-link>
      </span>
    </p>
  </footer>
</div>
  </div>
</template>

<style scoped>
  #map-card {
    width: 250px;
  }
</style>
