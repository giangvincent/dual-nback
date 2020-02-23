<template>
    <div id="game-play">
        <div class="game-indicator">
            <div class="columns is-mobile">
                <div class="column is-half">
                    n = 1
                </div>
                <div class="column is-half">
                    300 light
                </div>
            </div>
        </div><!-- indicator -->
        <div class="grid">
            <div class="columns is-mobile">
                <div class="column is-one-third">1</div>
                <div class="column is-one-third">2</div>
                <div class="column is-one-third">3</div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-one-third">1</div>
                <div class="column is-one-third">2</div>
                <div class="column is-one-third">3</div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-one-third">1</div>
                <div class="column is-one-third">2</div>
                <div class="column is-one-third">3</div>
            </div>
        </div><!-- Grid area -->
        <div class="user-interact columns is-mobile">
            <div class="column is-half">
                <button class="button is-fullwidth">Hình</button>
            </div>
            <div class="column is-half">
                <button class="button is-fullwidth">Âm thanh</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "game play",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
@import url("../themes/gamePlay.scss");
</style>