
<template>
  <div id="game-pause" class="flex flex-col flex-wrap justify-center min-h-screen">
    <div class="fixed w-screen h-screen flex content-center justify-center flex-wrap bg-white" v-if="!animated">
      <div class="animate-level h-56 w-56 text-5xl rounded-full">
        <div class="pt-10 rounded-t-full text-white" style="background: #226089;">N</div>
        <div class="pb-10 rounded-b-full" style="background: #30e3ca;" v-html="last_nlevel"></div>
      </div>
    </div>
    <navigator :nlevel="nBackLevel"></navigator>
    <div class="flex flex-wrap justify-center mx-6 p-2 rounded-lg border-gray-700 border-2 ">
      <div class="w-1/2 flex flex-col">
        <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displayFirstCol()" v-bind:key="index" >
          <sid-view-icon v-if="index == 0" w="1.5rem" h="1.5rem" fill="#44ab65"></sid-view-icon>
          <sid-view-icon v-if="index == 1" w="1.5rem" h="1.5rem" fill="#000000"></sid-view-icon>
          <sid-view-icon v-if="index == 2" w="1.5rem" h="1.5rem" fill="#d90000"></sid-view-icon>
          <span class="mx-4">{{ point }}</span>
        </div>
      </div>
      <div class="w-1/2 flex flex-col">
        <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displaySecondCol()" v-bind:key="index">
          <number-icon v-if="index == 0" w="1.5rem" h="1.5rem" fill="#44ab65"></number-icon>
          <number-icon v-if="index == 1" w="1.5rem" h="1.5rem" fill="#00000"></number-icon>
          <number-icon v-if="index == 2" w="1.5rem" h="1.5rem" fill="#d90000"></number-icon>
          <span class="mx-4">{{ point }}</span>
        </div>
      </div>
      
      <div class="flex w-full p-2 m-2 rounded-lg self-center bg-blue-700 text-white">
        <div class="flex mx-auto">
          <facebook-icon w="2rem" h="2rem" fill="#ffffff"></facebook-icon>
          <span class="mx-2 text-2xl">Share</span>
        </div>
      </div>
    </div>
    <!-- summary current points -->
    <div class="mx-auto">
      <div class="progress">
        <div class="my-2">You done a good job!</div>
        <div class="mb-2" v-html="`n = ${nBackLevel}`"></div>
      </div>
      <router-link to="play">
        <div class="p-4 rounded-lg bg-gray-400">
          <div class="mx-auto flex p-4 w-20 rounded-full bg-black">
            <img src="@/assets/images/replay.png" class="w-10 ml-2"/>
          </div>
          <div class="mt-1 text-2xl uppercase text-green-700">Keep playing</div>
        </div>
      </router-link>
    </div>
    <!-- summary -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapState, mapActions, mapMutations } from "vuex";
import Navigator from "../components/Navigator"
import FacebookIcon from "../components/icons/facebook_icon"
import SidViewIcon from "../components/icons/sid_view"
import NumberIcon from "../components/icons/number"

export default {
  name: "game-pause",
  data() {
    return {
      last_nlevel: 0,
      animated: false
    };
  },
  components: {
    Navigator: Navigator,
    FacebookIcon: FacebookIcon,
    SidViewIcon: SidViewIcon,
    NumberIcon: NumberIcon
  },
  computed: {
    ...mapState({
      curPoints: state => state.game.curPoints,
      nBackLevel: state => state.game.n_level
    })
  },
  mounted() {

    clearInterval(this.engine);
    console.log("start to show curren point.");

    console.log("start to judge");

    console.log("animate to determine the n level");
    this.last_nlevel = this.nBackLevel
    this.JUDGE_RESULTS();
    var self = this
    setTimeout(() => {
      self.last_nlevel = self.nBackLevel
      console.log(self.nBackLevel)
      self.RESET_POINTS()
    }, 1000);
    setTimeout(() => {
      self.animated = true
      console.log(self.nBackLevel)
    }, 2000);
    this.SET_CURSCENE("game-pause")
  },
  methods: {
    ...mapMutations(["JUDGE_RESULTS", "RESET_POINTS", "SET_CURSCENE"]),
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