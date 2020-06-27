/**
 * Mutations for common change of game
 *  
 */
import i18n from '../i18n'

export default {
    TOGGLE_SOUND(state) {
        state.soundSetting = !state.soundSetting
    },
    TOGGLE_MUSIC(state) {
        state.musicSetting = !state.musicSetting
    },
    SET_I18N(state, payload) {
        if (state.languageList.hasOwnProperty(payload)) {
            state.locale = payload
            i18n.locale = payload
        }
    }
}