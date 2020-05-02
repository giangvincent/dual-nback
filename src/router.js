import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('./views/GamePlay.vue')
    },
    {
      path: '/game-over',
      name: 'game-over',
      component: () => import('./views/GameOver.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/Setting.vue')
    }
    /* {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    } */
  ]
})
