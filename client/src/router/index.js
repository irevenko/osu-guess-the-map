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
    path: '/usual_game',
    name: 'Map',
    component() {
      return import('../views/Map.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
