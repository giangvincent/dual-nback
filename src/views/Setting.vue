<template>
    <div id="setting">
        <navigator :nlevel="nBackLevel"></navigator>
    </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { mapState } from "vuex";
import Navigator from "../components/Navigator"

export default {
    name: "setting",
    components: {
        Navigator: Navigator
    },
    computed: {
        ...mapState({
            user: state => state.user.info,
            nBackLevel: state => state.game.n_level
        })
    }
}
</script>

<style lang="scss">
@import url("../themes/Setting.scss");
</style>