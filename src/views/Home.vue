<template>
  <div id="home">
    <div class="columns logo">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <!-- game logo -->

    <div class="columns play-nav">
      <img src="../assets/images/home-area.png" alt="home-area" />
      <router-link to="play">Play</router-link>
    </div>

    <div class="columns navs is-mobile">
      <p class="is-fullwidth">
        <a class="button ">Leaders board</a>
      </p>
      <p class="is-fullwidth">
        <a class="button ">Tutorials</a>
      </p>
      <p class="is-fullwidth">
        <a class="button ">Settings</a>
      </p>
      
    </div>

    <footer class="footer-navs">
      <ul class="inline">
        <li>
          <a>Policies</a>
        </li>
        <li>
          <a>Terms</a>
          
        </li>
      </ul>
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
