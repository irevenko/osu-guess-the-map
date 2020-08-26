<template>
  <main>
  <Navbar/>
  <router-view/>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
input[type=range] {
  height: 31px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 2px #A6A6A6;
  background: #ED64A6;
  border-radius: 4px;
  border: 2px solid #eb8dba;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 2px solid #eb8dba;
  height: 22px;
  width: 23px;
  border-radius: 10px;
  background: #ED64A6;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ED64A6;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 2px #A6A6A6;
  background: #ED64A6;
  border-radius: 4px;
  border: 2px solid #eb8dba;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 2px solid #eb8dba;
  height: 22px;
  width: 23px;
  border-radius: 10px;
  background: #ED64A6;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #ED64A6;
  border: 2px solid #eb8dba;
  border-radius: 8px;
  box-shadow: 1px 1px 2px #A6A6A6;
}
input[type=range]::-ms-fill-upper {
  background: #ED64A6;
  border: 2px solid #eb8dba;
  border-radius: 8px;
  box-shadow: 1px 1px 2px #A6A6A6;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 2px solid #eb8dba;
  height: 22px;
  width: 23px;
  border-radius: 10px;
  background: #ED64A6;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #ED64A6;
}
input[type=range]:focus::-ms-fill-upper {
  background: #ED64A6;
}

</style>
