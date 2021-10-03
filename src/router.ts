import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },{
    path: '/helloworld',
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;