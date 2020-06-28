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
            level: "normal",
            typeList: [
                "position_number",
                "position_sound",
                "number_sound"
            ],
            levelList: [
                "easy",
                "normal",
                "hard",
                "very-hard"
            ]
        },
        minRate: 0.5,
        wowClass: false,
        correctClues: 0,
        n_level: 1,
        sounds: [
            "clickBtn.mp3",
            "number.mp3",
            "possition.mp3",
            "sound.mp3",
            "upLevel.mp3",
            "downLevel.mp3",
            "keepLevel.mp3"
        ],
        musics: [
            "home.mp3",
            "play.mp3",
            "pause.mp3"
        ],
        stimuliNumber: 1,
        time: 2000,
        clues: 10,
        curScene: null
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}