/* 
* Module gamePlay
*-----------------------
    contain states for game play
*/
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state: {
        game: {
            level: "normal"
        },
        wowClass: false,
        n_level: 1,
        playSounds: [],
        stimuliNumber: 1,
        time: 2000,
        clues: 16
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}