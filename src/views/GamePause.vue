
<template>
  <div id="game-pause" class="flex flex-col flex-wrap justify-center min-h-screen">
    <div class="flex absolute top-0 w-full h-16 text-white indicator-nav">
      <div class="flex w-full justify-center relative content-center flex-wrap">
        <router-link class="router-link-active absolute left-0 h-full pl-2 flex content-center flex-wrap" to="/">
          <img class="w-8" src="../assets/images/back-btn.png" />
        </router-link>
        <div class>n = 1</div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center mx-6 p-2 rounded-lg border-gray-700 border-2 ">
      <div class="w-1/2 flex flex-col">
        <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displayFirstCol()" v-bind:key="index" >
          <img class="w-6" src="../assets/icons/sid-view.svg" />
          <span class="mx-4">{{ point }}</span>
        </div>
      </div>
      <div class="w-1/2 flex flex-col">
        <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displaySecondCol()" v-bind:key="index">
          <img class="w-6" src="../assets/icons/number.svg" />
          <span class="mx-4">{{ point }}</span>
        </div>
      </div>
      
      <div class="flex p-2 m-2 rounded-lg self-center bg-blue-700 text-white">
        <img class="w-6" src="../assets/icons/facebook.svg"/>
        <span class="mx-2">Share</span>
      </div>
    </div>
    <!-- summary current points -->
    <div class="summary">
      <div class="columns avatar">
        <img src alt="avatar" />
      </div>
      <div class="columns progress">
        <div class="score">69</div>
        <div class="nback">n = 2</div>
      </div>
      <div><img src="../assets/images/replay.png" class="w-10"/></div>
    </div>
    <!-- summary -->
  </div>
</template>

<script>
/* eslint-disable no-console */
// TODO: define GAMEOVER
// TODO: after this page
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "game-over",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      curPoints: state => state.game.curPoints,
      nBackLevel: state => state.game.n_level
    })
  },
  mounted() {
    console.log("start to show curren point.");

    console.log("start to judge");

    console.log("animate to determine the n level");
  },
  methods: {
    ...mapMutations(["JUDGE_RESULTS"]),
    ...mapActions([]),
    displayFirstCol() {
      return this.curPoints.slice(0,3);
    },
    displaySecondCol() {
      return this.curPoints.slice(3,6);
    }
  }
};
</script>

<style lang="scss">
@import url("../themes/GameOver.scss");
</style>