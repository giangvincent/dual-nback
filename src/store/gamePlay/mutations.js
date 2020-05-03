/**
    Module gamePlay
    -----------------
    contain mutation functions
*/

export default {
    SET_WOWCLASS: function(state, payload) {
        state.wowClass = payload;
    },
    SET_PLAY_ABLE_SOUNDS: function(state, payload) {
        state.playSounds = payload;
    },
    SET_STIMULI_NUMBER: function(state, payload) {
        state.stimuliNumber = payload;
    },
    SET_TIME: function(state, payload) {
        state.time = payload;
    },
    SET_NLEVEL: function(state, payload) {
        state.n_level = payload;
    },
    SET_NCLUES: function(state, payload) {
        state.clues = payload;
    }
}