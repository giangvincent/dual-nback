/* eslint-disable no-console */
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
    },
    SET_MISSED_POINT: function(state, payload) {
        if (payload === 'number') {
            state.curPoints[4] += 1;
        }
        if (payload === 'position') {
            state.curPoints[1] += 1;
        }
    },
    SET_WRONG_POINT: function(state, payload) {
        if (payload === 'number') {
            state.curPoints[5] += 1;
        }
        if (payload === 'position') {
            state.curPoints[2] += 1;
        }
    },
    SET_RIGHT_POINT: function(state, payload) {
        if (payload === 'number') {
            state.curPoints[3] += 1;
        }
        if (payload === 'position') {
            state.curPoints[0] += 1;
        }
    },
    INCR_CORRECT_CLUES: function(state) {
        state.correctClues++
    },
    JUDGE_RESULTS: function(state) {
        if (state.curScene === 'game-pause') {
            return 0
        }
        var tolleratedErrors = state.correctClues * state.minRate;
        // console.log(state.curPoints , tolleratedErrors)
        var wrongPositions = state.curPoints[1] + state.curPoints[2];
        var wrongNumbers = state.curPoints[4] + state.curPoints[5];
        if (wrongPositions <= tolleratedErrors && wrongNumbers <= tolleratedErrors) {
            state.n_level += 1; // next level
            state.clues++;
        } else if (wrongPositions <= (tolleratedErrors + 2) || wrongNumbers <= (tolleratedErrors + 2)) {
            console.log('keep the level')
        } else {
            if (state.n_level !== 1)
                state.n_level -= 1;
            else
                console.log('keep the level 1')
        }
    },
    SET_CURSCENE: function(state, payload) {
        state.curScene = payload
    },
    RESET_POINTS: function (state) {
        state.curPoints = [0, 0, 0, 0, 0, 0]
    }

}