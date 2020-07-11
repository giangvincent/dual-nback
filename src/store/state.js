import { Howl } from 'howler'
export default {
    soundSetting: false,
    musicSetting: false,
    sound_clickBtn: new Howl({
        src: ['assets/audios/clickBtn.mp3'],
        loop: false
    }),
    sound_upLevel: new Howl({
        src: ['assets/audios/levelUp.mp3'],
        loop: false
    }),
    sound_downLevel: new Howl({
        src: ['assets/audios/levelDown.mp3'],
        loop: false
    }),
    sound_keepLevel: new Howl({
        src: ['assets/audios/levelKeep.mp3'],
        loop: false
    }),
    music_home: new Howl({
        src: ['assets/audios/home_music.mp3'],
        loop: true
    }),
    music_play: new Howl({
        src: ['assets/audios/play_music.mp3'],
        loop: true
    }),
    locale: "en",
    languageList: {
        en: "English",
        vi: "Tiếng Việt"
    }
}