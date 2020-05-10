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
        curPoints: [0, 0, 0, 0, 0, 0],
        /* [
            'right position' , 
            'missed position', 
            'wrong position', 
            'right number or sound', 
            'missed number or sound' , 
            'wrong number or sound'
        ] */
        game: {
            type: "position_number",
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