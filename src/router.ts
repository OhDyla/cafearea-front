import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

// import Login from './components/Login.vue';
// import Logout from './components/Logout.vue';
// import Signup from './components/Signup.vue';

// import Trend from './components/Trend.vue';
// import Rank from './components/Rank.vue';

// import LocalSearch from './components/LocalSearch.vue';
// import ChainSearch from './components/ChainSearch.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },{
    path: '/helloworld',
    component: HelloWorld,
  }
  // ,{
  //   path: '/login',
  //   component: Login,
  // },{
  //   path: '/logout',
  //   component: Logout,
  // },{
  //   path: '/signup',
  //   component: Signup,
  // },{
  //   path: '/trend',
  //   component: Trend,
  // },{
  //   path: '/rank',
  //   component: Rank,
  // },{
  //   path: '/localsearch',
  //   component: LocalSearch,
  // },{
  //   path: '/chainsearch',
  //   component: ChainSearch,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;