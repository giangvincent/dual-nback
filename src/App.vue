<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { mapState } from "vuex";

export default {
  name: "main-app",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      musicSetting: (state) => state.musicSetting,
      homeMusic: (state) => state.music_home,
    }),
  },
  watch: {},
  mounted() {
    this.homeMusic.play();
    this.homeMusic.mute(!this.musicSetting);
    this.homeMusic.volume(0.5);
  },
};
</script>

<style lang="scss">
@import "./themes/index.scss";

@font-face {
  font-family: "Baloo";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("~@/assets/fonts/Baloo2-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: "Baloo";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("~@/assets/fonts/Baloo2-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Baloo";
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("~@/assets/fonts/Baloo2-Regular.ttf") format("truetype");
}
</style>
