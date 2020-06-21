<template>
  <div id="leader-board">
    <navigator :nlevel="nBackLevel"></navigator>
    <div class="mt-20 mx-6 ">
      <div class="flex flex-wrap justify-center rounded-lg border-gray-700 border-2 p-2">
        
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { mapState } from "vuex";
import Navigator from "../components/Navigator";

export default {
  name: "leader-board",
  components: {
    Navigator: Navigator
  },
  computed: {
    ...mapState({
      user: state => state.user.info,
      nBackLevel: state => state.game.n_level
    })
  }
};
</script>

<style lang="scss">
@import url("../themes/Setting.scss");
</style>