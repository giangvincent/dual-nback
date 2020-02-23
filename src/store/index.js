import Vue from 'vue'
import Vuex from 'vuex'
import gamePlay from "./gamePlay"
import user from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        game: gamePlay,
        user: user
    }
})
