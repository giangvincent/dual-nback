/* eslint-disable no-undef */
/**
 * Async functions for Common game
 */

export default {
    TOGGLE_SOUND(store) {
        FBInstant.player.setDataAsync({soundSetting: !store.state.soundSetting})
        store.commit("SET_SOUND_SETTING", !store.state.soundSetting)
    },
    TOGGLE_MUSIC(store) {
        FBInstant.player.setDataAsync({musicSetting: !store.state.musicSetting})
        store.commit("SET_MUSIC_SETTING", !store.state.musicSetting)
    },
}