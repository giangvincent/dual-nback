/* eslint-disable no-console */
/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.config.errorHandler = function(err, vm, info) {
  console.error("[Global Error Handler]: Error in " + info + ": " + err);
  // eslint-disable-next-line
  // ga && ga("send", "event", "error-global", "Error in " + info + ": " + err);
};
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
  store.commit("SET_I18N", FBInstant.getLocale())
  FBInstant.player
  .getDataAsync([
    'soundSetting', 
    'musicSetting',
    'lastNLevel',
    'lastPoints'
  ])
  .then(function(data) {
    console.log(data)
    store.commit("SET_SOUND_SETTING", data['soundSetting'])
    store.commit("SET_MUSIC_SETTING", data['musicSetting'])
    store.commit("SET_LASTNLEVEL", data['lastNLevel'])
    store.commit("SET_LASTPOINTS", data['lastPoints'])
  });
  // console.log(store.state.user.info)
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
}

