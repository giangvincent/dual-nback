<template>
  <div id="home">
    <div class="flex">
      <img class="m-auto pt-4 px-4 pb-3" src="../assets/images/logo.png" alt="logo" />
    </div>
    <!-- game logo -->

    <div class="flex m-4 mb-6 justify-center content-center flex-wrap">
      <img src="../assets/images/home-area.png" alt="home-area" />
      <router-link class="absolute" to="play">
        <img class="w-48" src="../assets/images/play_btn.png" alt="play">
      </router-link>
    </div>

    <div class="flex flex-col m-4">
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl">Settings</a>
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl">Leaders board</a>
      <a class="font-bold py-2 px-4 mb-4 w-full btn-3d rounded border-2 uppercase text-xl">Tutorials</a>
    </div>

    <footer class="flex flex-row justify-center flex-wrap mb-2 italic">
      <a class="px-2">Policies</a>
      <a class="px-2">Terms</a>
    </footer>
  </div>
</template>

<script>
// TODO: ADD settings
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "home",
  components: {},
  mounted: function() {

  },
  computed: {
    ...mapState({})
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([])
  }
};
</script>

<style lang="scss">
@import url("../themes/home.scss");
</style>
