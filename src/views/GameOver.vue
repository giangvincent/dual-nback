<template>
    <div id="game-over">
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
        <div class="summary">
            <div class="columns avatar">
                <img src="" alt="avatar">
            </div>
            <div class="columns progress">
                <div class="score">
                    69
                </div>
                <div class="nback">
                    n = 2
                </div>
            </div>
        </div><!-- summary -->
        
    </div>
</template>

<script>
export default {
    name: "game-over"
}
</script>

<style lang="scss">
@import url("../themes/GameOver.scss");
</style>