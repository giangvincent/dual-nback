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
    SET_PARAMS: function(state, payload) {
        state.time = payload.time;
        state.clues = payload.clues;
        state.n_level = payload.n_level;
        state.stimuliNumber = payload.stimuli;
    }
}