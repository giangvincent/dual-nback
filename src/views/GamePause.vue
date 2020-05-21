
<template>
  <div id="game-pause" class="flex flex-col flex-wrap justify-center min-h-screen">
    <div class="flex absolute top-0 w-full h-16 text-white indicator-nav">
      <div class="flex w-full justify-center relative content-center flex-wrap">
        <router-link class="router-link-active absolute left-0 h-full" to="/">Home</router-link>
        <div class>n = 1</div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-1/2">Positions</div>
      <div class="w-1/2">Numbers</div>
      <div class="w-1/2" v-for="(point, index) in curPoints" v-bind:key="index">{{ point }}</div>
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
    ...mapActions([])
  }
};
</script>

<style lang="scss">
@import url("../themes/GameOver.scss");
</style>