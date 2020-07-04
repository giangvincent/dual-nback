<template>
  <div id="home">
    <div class="flex">
      <img class="m-auto pt-4 px-4" src="@/assets/images/logo.png" alt="logo" />
    </div>
    <!-- game logo -->

    <div class="flex m-4 sm:m-10 mb-6 justify-center content-center flex-wrap">
      <img src="@/assets/images/home-area.png" alt="home-area" />
      <router-link class="absolute p-10 w-48 h-48 rounded-full play-home-bg" to="play">
        <img class="w-48" src="@/assets/images/triangle-radius.png" alt="play">
      </router-link>
    </div>

    <div class="flex flex-col m-4 sm:m-10">
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl" :class="{'btn-3d-active': redirectState === 'settings'}" @click="redirectTo('setting')">{{ $t("home.setting") }}</a>
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl" :class="{'btn-3d-active': redirectState === 'leader-board'}" @click="redirectTo('leader-board')">{{ $t("home.leaderBoard") }}</a>
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl" :class="{'btn-3d-active': redirectState === 'tutorials'}"  @click="redirectTo('tutorial')">{{ $t("home.tutorial") }}</a>
    </div>

    <footer class="flex flex-row justify-center flex-wrap mb-2 italic">
      <a class="px-2 link-active">{{$t("home.policies")}}</a>
      <a class="px-2 link-active">{{$t("home.terms")}}</a>
    </footer>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "home",
  components: {},
  data() {
    return {
      redirectState: false
    }
  },
  computed: {
    ...mapState({
      musicSetting: state => state.musicSetting,
      homeMusic: state => state.music_home,
      playMusicScene: state => state.music_play,
      soundSetting: state => state.soundSetting,
      clickBtn: state => state.sound_clickBtn
    })
  },
  mounted: function() {
    clearInterval(this.engine);
    this.playMusicScene.stop()
    this.homeMusic.stop();
    this.homeMusic.play();
    this.homeMusic.mute(!this.musicSetting);
    this.homeMusic.loop(true);
    this.homeMusic.volume(0.5)
    FBInstant.player.canSubscribeBotAsync().then(
      can_subscribe => {
        if(can_subscribe) {
            FBInstant.player.subscribeBotAsync().then(
              // Player is subscribed to the bot
            ).catch(function (e) {
              // Handle subscription failure
              console.log(e)
            });
        }
      }
    );
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
    redirectTo (route) {
      this.clickBtn.play();
      this.clickBtn.mute(!this.soundSetting);
      
      this.redirectState = route
      this.$router.push(route)
    }
  }
};
</script>

<style lang="scss">
@import url("../themes/home.scss");
</style>
