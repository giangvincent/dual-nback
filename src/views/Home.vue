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

    <div class="columns navs">
      <p class="field">
        <a class="button is-fullwidth">Leaders board</a>
      </p>
      <p class="field">
        <a class="button is-fullwidth">Tutorials</a>
      </p>
      <p class="field">
        <a class="button is-fullwidth">Settings</a>
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
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
@import url("../themes/home.scss");
</style>
