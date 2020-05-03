<template>
  <div id="home">
    <div class="flex">
      <img class="m-auto pt-4 px-4 pb-3" src="../assets/images/logo.png" alt="logo" />
    </div>
    <!-- game logo -->

    <div class="flex m-4 justify-center content-center flex-wrap">
      <img src="../assets/images/home-area.png" alt="home-area" />
      <router-link class="absolute" to="play">Play</router-link>
    </div>

    <div class="flex flex-col m-4">
      <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full w-full">Leaders board</a>
      <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full w-full">Tutorials</a>
      <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2  rounded-full w-full">Settings</a>
      
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
