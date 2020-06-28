/* eslint-disable no-undef */
/**
 * Mutations for common change of game
 *  
 */
import i18n from '../i18n'

export default {
    SET_SOUND_SETTING(state, payload) {
        state.soundSetting = payload
    },
    SET_MUSIC_SETTING(state, payload) {
        state.musicSetting = payload
    },
    SET_I18N(state, payload) {
        if (state.languageList.hasOwnProperty(payload)) {
            state.locale = payload
            i18n.locale = payload
        }
    }
}