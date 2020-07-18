import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('./views/GamePlay.vue')
    },
    {
      path: '/play-with-sound',
      name: 'play-with-sound',
      component: () => import('./views/GamePlayWithSound.vue')
    },
    {
      path: '/game-pause',
      name: 'game-pause',
      component: () => import('./views/GamePause.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/Setting.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('./views/Tutorial.vue')
    },
    {
      path: '/leader-board',
      name: 'leader-board',
      component: () => import('./views/LeaderBoard.vue')
    }
    /* {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    } */
  ]
})
