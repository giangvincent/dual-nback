/**
    Module gamePlay
    -----------------
    contain mutation functions
*/

export default {
    UPDATE_INFO: function(state, payload) {
        state.info.name = payload.name
        state.info.photo = payload.info
        state.info.context = payload.context
        state.info.id = payload.id
    }
}