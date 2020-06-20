
<template>
  <div id="game-pause" class="flex flex-col flex-wrap justify-center min-h-screen mb-10">
    <loading v-if="loading"></loading>
    <div class="fixed w-screen h-screen flex content-center justify-center flex-wrap bg-white z-10" v-if="!animated">
      <div class="animate-level h-56 w-56 text-5xl rounded-full">
        <div class="pt-10 rounded-t-full text-white" style="background: #226089;">N</div>
        <div class="pb-10 rounded-b-full" style="background: #30e3ca;" v-html="last_nlevel"></div>
      </div>
    </div>
    <navigator :nlevel="nBackLevel"></navigator>
    <div id="share-html" class="flex flex-wrap justify-center mt-20 mx-6 p-2 rounded-lg border-gray-700 border-2 ">
        <div class="flex w-full justify-center">
          <canvas class="w-24 h-24 rounded-full" id="userPhoto"></canvas>
        </div>
        <div class="text-3xl flex w-full my-2 justify-center">
          <div class="text-white w-16 py-2 rounded-l-lg" style="background: #226089;">N</div>
          <div class="w-16 py-2 rounded-r-lg" style="background: #30e3ca;" v-html="nBackLevel"></div>
        </div>
        <div class="w-1/2 flex flex-col">
          <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displayFirstCol()" v-bind:key="index" >
            <sid-view-icon v-if="index == 0" w="1.5rem" h="1.5rem" fill="#44ab65" text="RIGHT"></sid-view-icon>
            <sid-view-icon v-if="index == 1" w="1.5rem" h="1.5rem" fill="#000000" text="MISS"></sid-view-icon>
            <sid-view-icon v-if="index == 2" w="1.5rem" h="1.5rem" fill="#d90000" text="WRONG"></sid-view-icon>
            <span class="mx-4">{{ point }}</span>
          </div>
        </div>
        <div class="w-1/2 flex flex-col">
          <div class="w-full flex content-center justify-center py-2" v-for="(point, index) in displaySecondCol()" v-bind:key="index">
            <number-icon v-if="index == 0" w="1.5rem" h="1.5rem" fill="#44ab65" text="RIGHT"></number-icon>
            <number-icon v-if="index == 1" w="1.5rem" h="1.5rem" fill="#00000" text="MISS"></number-icon>
            <number-icon v-if="index == 2" w="1.5rem" h="1.5rem" fill="#d90000" text="WRONG"></number-icon>
            <span class="mx-4">{{ point }}</span>
          </div>
        </div>
    </div>
    <div class="flex p-2 rounded-lg bg-blue-700 text-white flex-wrap mx-6 mt-4" @click="share()">
        <div class="flex mx-auto">
          <facebook-icon w="2rem" h="2rem" fill="#ffffff"></facebook-icon>
          <span class="mx-2 text-2xl">Share</span>
        </div>
      </div>
    <!-- summary current points -->
    <div class="mx-auto">
      <div class="progress">
        <div class="my-2 uppercase text-xl">You done a good job!</div>
        
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
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { mapState, mapActions, mapMutations } from "vuex";
import Navigator from "../components/Navigator"
import FacebookIcon from "../components/icons/facebook_icon"
import SidViewIcon from "../components/icons/sid_view"
import NumberIcon from "../components/icons/number"
import Loading from "../components/Loading"
import html2canvas from 'html2canvas';

export default {
  name: "game-pause",
  data() {
    return {
      last_nlevel: 0,
      animated: false,
      loading: false
    };
  },
  components: {
    Navigator: Navigator,
    FacebookIcon: FacebookIcon,
    SidViewIcon: SidViewIcon,
    NumberIcon: NumberIcon,
    Loading: Loading
  },
  computed: {
    ...mapState({
      user: state => state.user.info,
      curPoints: state => state.game.curPoints,
      nBackLevel: state => state.game.n_level
    })
  },
  mounted() {
    var userPhotoCanvas = document.getElementById("userPhoto");
    var contextUserPhoto = userPhotoCanvas.getContext("2d");
    var userPhoto = new Image();
    userPhoto.onload = function() {
      contextUserPhoto.drawImage(this, 0, 0, userPhotoCanvas.width, userPhotoCanvas.height);
      // call next step in your code here, f.ex: nextStep();
    };
    userPhoto.crossOrigin = "Anonymous";
    userPhoto.src = this.user.photo;
    clearInterval(this.engine);
    console.log("start to show curren point.");
    this.replaceAllSvg();
    console.log("Current points are: ", this.curPoints)

    console.log("start to judge");

    console.log("animate to determine the n level");
    this.last_nlevel = this.nBackLevel
    this.JUDGE_RESULTS();
    var self = this
    setTimeout(() => {
      self.last_nlevel = self.nBackLevel
      console.log(self.nBackLevel)
    }, 1000);
    setTimeout(() => {
      self.animated = true
      console.log(self.nBackLevel)
    }, 2000);
    this.SET_CURSCENE("game-pause")
  },
  methods: {
    ...mapMutations(["JUDGE_RESULTS", "SET_CURSCENE"]),
    ...mapActions([]),
    displayFirstCol() {
      console.log(this.curPoints.slice(0,3))
      return this.curPoints.slice(0,3);
    },
    displaySecondCol() {
      console.log(this.curPoints.slice(3,6))
      return this.curPoints.slice(3,6);
    },
    async share() {
      this.loading = true
      var self = this
      await html2canvas(document.getElementById("share-html")).then(function(canvas) {
        FBInstant.shareAsync({
          intent: 'REQUEST',
          image: canvas.toDataURL(),
          text: 'Keep going (y)',
          data: { shareTime: new Date().getTime() },
        }).then(function() {
          self.loading = false
        });
      });
      
    },
    replaceAllSvg() {
      var svgs = document.querySelectorAll('svg');
      // var img = document.querySelector('img');


      /* // get svg data
      var xml = new XMLSerializer().serializeToString(svg);
      // make it base64
      var svg64 = btoa(xml);
      var b64Start = 'data:image/svg+xml;base64,';
      // prepend a "header"
      var image64 = b64Start + svg64;
      // set it as the source of the img element
      img.onload = function() {
        console.log('delete svg')
        console.log(this)
      };
      img.src = image64; */
    }
  }
};
</script>

<style lang="scss">
@import url("../themes/GameOver.scss");
</style>