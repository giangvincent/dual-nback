import Vue from 'vue'
import Vuex from 'vuex'
import gamePlay from "./gamePlay"
import user from "./user"
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    modules: {
        game: gamePlay,
        user: user
    }
})
