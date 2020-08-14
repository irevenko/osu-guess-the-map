import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component() {
      return import('../views/Home.vue');
    },
  },
  {
    path: '/image_game',
    name: 'ImageGame',
    component() {
      return import('../views/ImageGame.vue');
    },
  },
  {
    path: '/audio_game',
    name: 'AudioGame',
    component() {
      return import('../views/AudioGame.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
