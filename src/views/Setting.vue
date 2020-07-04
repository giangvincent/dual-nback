<template>
  <div id="setting">
    <navigator :nlevel="nBackLevel"></navigator>
    <div class="mt-20 mx-6">
      <div class="flex flex-wrap justify-center rounded-lg border-gray-700 border-2 p-2">
        <div class="flex text-xl justify-between w-full py-2">
          <div class="uppercase">{{ $t("settingText.sound") }}</div>
          <div class="btn-status flex pt-1">
            <span class="-mt-1 mr-1"  :class="{'text-red-600': !soundSetting, 'text-green-600': soundSetting}">
              {{ (soundSetting) ? $t("settingText.enable"): $t("settingText.disable") }}
            </span>
            <input type="checkbox" name="soundSetting" id="soundSetting" v-bind="{soundSetting: 'checked'}" class="hidden checkbox" />
            <label
              for="soundSetting"
              class="flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer"
              :class="{'btn-active': soundSetting, 'btn-change': !soundSetting}"
              @click="TOGGLE_SOUND"
            ></label>
          </div>
        </div><!-- Sound setting -->
        <div class="flex text-xl justify-between w-full py-2">
          <div class="uppercase">{{ $t("settingText.music") }}</div>
          <div class="btn-status flex pt-1">
            <span class="-mt-1 mr-1" :class="{'text-red-600': !musicSetting, 'text-green-600': musicSetting}">
              {{ (musicSetting) ? $t("settingText.enable"): $t("settingText.disable") }}
            </span>
            <input type="checkbox" name="musicSetting" id="musicSetting" v-bind="{musicSetting: 'checked'}" class="hidden checkbox" />
            <label
              for="musicSetting"
              class="flex items-center p-1 rounded-lg w-12 h-6 cursor-pointer"
              :class="{'btn-active': musicSetting, 'btn-change': !musicSetting}"
              @click="TOGGLE_MUSIC"
            ></label>
          </div>
        </div><!-- Music setting -->
        <div class="flex text-xl justify-between w-full py-2 relative">
          <div class="uppercase">{{ $t("settingText.lang") }}</div>
          <select class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" v-model="locale_setting">
            <option v-for="(langDisplay, langSymbol) in languageList" :key="langSymbol" :value="langSymbol">{{ langDisplay }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div><!-- Change locale -->
        <div class="flex text-xl justify-between w-full py-2 relative">
          <div class="uppercase">{{ $t("gameType") }}</div>
          <select class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-40" v-model="gameTypeSetting">
            <option v-for="(game_type, index) in gameTypeList" :key="`game_type-${index}`" :value="game_type">{{ $t("typeList")[index] }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div><!-- Change game typelist -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { mapState, mapMutations, mapActions } from "vuex";
import Navigator from "../components/Navigator";

export default {
  name: "Setting",
  data() {
    return {
      locale_setting: 'en',
      gameTypeSetting: "position_number"
    }
  },
  components: {
    Navigator: Navigator
  },
  computed: {
    ...mapState({
      user: state => state.user.info,
      nBackLevel: state => state.game.n_level,
      soundSetting: state => state.soundSetting,
      musicSetting: state => state.musicSetting,
      homeMusic: state => state.music_home,
      languageList: state => state.languageList,
      locale: state => state.locale,
      gameType: state => state.game.setting.type,
      gameTypeList: state => state.game.setting.typeList
    })
  },
  mounted() {
    this.locale_setting = this.locale
    this.gameTypeSetting = this.gameType
  },
  watch: {
    locale_setting: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.SET_I18N(newVal)
      }
    },
    gameTypeSetting: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.CHANGE_GAMETYPE(newVal)
      }
    },
    musicSetting: function(newVal, oldVal)  {
      if (newVal !== oldVal) {
        this.homeMusic.mute(!this.musicSetting);
      }
    }
  },
  methods: {
    ...mapMutations(["SET_I18N", "SET_GAMETYPE"]),
    ...mapActions(["TOGGLE_SOUND", "TOGGLE_MUSIC", "CHANGE_GAMETYPE"])
  }
};
</script>

<style lang="scss">
@import url("../themes/Setting.scss");
</style>