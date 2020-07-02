/* 
* Module gamePlay
*-----------------------
    contain states for game play
*/
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { Howl } from 'howler';

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
        setting: {
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
        playSounds: [],
        sounds: {
            "clickBtn": new Howl({ src: ['assets/audios/clickBtn.mp3'] }),
            "upLevel": new Howl({ src: ['assets/audios/levelUp.mp3'] }),
            "downLevel": new Howl({ src: ['assets/audios/levelDown.mp3'] }),
            "keepLevel": new Howl({ src: ['assets/audios/levelKeep.mp3'] })
        },
        musics: {
            "home": new Howl({ src: ['assets/audios/home_music.mp3'] }),
            "play": new Howl({ src: ['assets/audios/play_music.mp3'] })
        },
        stimuliNumber: 1,
        time: 2000,
        clues: 10,
        curScene: null
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}