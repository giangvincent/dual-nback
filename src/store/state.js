import { Howl } from 'howler'
export default {
    soundSetting: false,
    musicSetting: false,
    sound_clickBtn: new Howl({ src: ['assets/audios/clickBtn.mp3'] }),
    sound_upLevel: new Howl({ src: ['assets/audios/levelUp.mp3'] }),
    sound_downLevel: new Howl({ src: ['assets/audios/levelDown.mp3'] }),
    sound_keepLevel: new Howl({ src: ['assets/audios/levelKeep.mp3'] }),
    music_home: new Howl({ src: ['assets/audios/home_music.mp3'] }),
    music_play: new Howl({ src: ['assets/audios/play_music.mp3'] }),
    locale: "en",
    languageList: {
        en: "English",
        vi: "Tiếng Việt"
    }
}