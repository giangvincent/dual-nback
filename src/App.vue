<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { mapState } from 'vuex'

export default {
  name: "main-app",
  data() {
    return {}
  },
  computed: {
    ...mapState({
      musicSetting: state => state.musicSetting,
      homeMusic: state => state.music_home
    })
  },
  watch: {
  },
  mounted() {
    this.homeMusic.play();
    this.homeMusic.mute(!this.musicSetting);
    this.homeMusic.volume(0.5)
  }
}
</script>

<style lang="scss">
@import url("./themes/index.scss");
</style>
