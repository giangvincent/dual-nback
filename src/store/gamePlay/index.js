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
        game_data: {
            alphabet_sounds: {
                en: [
                    new Howl({
                        src: ['assets/audios/alphabets/A_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/B_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/C_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/D_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/E_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/F_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/K_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/Q_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/R_en.mp3'],
                        loop: false
                    }),
                    new Howl({
                        src: ['assets/audios/alphabets/Y_en.mp3'],
                        loop: false
                    })]
            }
        },
        minRate: 0.5,
        wowClass: false,
        correctClues: 0,
        n_level: 1,
        playSounds: [],
        
        stimuliNumber: 1,
        time: 2000,
        clues: 10,
        curScene: null
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}