/* eslint-disable no-undef */
/**
    Module gamePlay
    --------------------
    contain action functions
*/

export default {
    CHANGE_GAMETYPE(store, payload) {
        if (store.state.setting.typeList.includes(payload)) {
            FBInstant.player.setDataAsync({gameType: payload})
            store.commit("SET_GAMETYPE", payload)
        }
    },
    load_audios(store) {
        store.SET_PLAY_ABLE_SOUNDS = []
    }
}