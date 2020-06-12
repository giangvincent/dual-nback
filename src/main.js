/* eslint-disable no-console */
/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './i18n'

Vue.config.productionTip = false
const assets = [
  '@/assets/images/logo.png',
  '@/assets/images/home-area.png',
  '@/assets/images/back-btn.png',
  '@/assets/images/play-btn.png',
  '@/assets/images/replay.png'
];

window.onload = function() {

  // When the window loads, start to initialize the SDK
  FBInstant.initializeAsync().then(function() {

    // We can start to load assets
    for (let i in assets) {
      // When preloading assets, make sure to report the progress
      FBInstant.setLoadingProgress(i / assets.length * 100);
    }

    // Now that assets are loaded, call startGameAsync
    FBInstant.startGameAsync().then(onStart);
  });
};

function onStart() {
  
  var userInfo = {
    id: FBInstant.player.getID(),
    name: FBInstant.player.getName(),
    info: FBInstant.player.getPhoto(),
    context: FBInstant.context.getType(),
    entryPointData: FBInstant.getEntryPointData()
  }
  store.commit("UPDATE_INFO", userInfo)
  console.log(store.state.user.info)
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
}

