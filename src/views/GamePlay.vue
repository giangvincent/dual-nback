
<template>
  <div id="game-play" class="flex flex-col content-center justify-center flex-wrap">
    <div class="flex">
      <div class="w-1/2">
        <router-link to="/">Home</router-link>
      </div>
      
      <div class="w-1/2">
        <div class="column is-half">n = 1</div>
      </div>
    </div>
    <!-- indicator -->
    <div class="grid">
      <div class="grid__row flex is-mobile" v-for="row in rows" v-bind:key="row">
        <div
          class="grid__cell w-1/3"
          v-for="column in columns"
          :key="column"
          :class="{ grid__selected: (selectedRow === row && selectedColumn === column) }"
        >
          <span
            class="text-5xl font-bold"
            v-if="selectedRow === row && selectedColumn === column"
          >{{ selectedNumber }}</span>
          <span v-else>&nbsp;</span>
        </div>
      </div>
    </div>
    <div class="controls flex flex-wrap justify-between m-auto mt-3">
      <button
        @click="userSelectedPosition"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
      >← Position</button>
      <button
        @click="userSelectedNumber"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
      >Number →</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
// TODO: add navigation
// TODO: define gameover
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "game-play",
  data() {
    return {
      clueFadeOutTime: 400,
      columns: 3,
      rows: 3,
      selectedRow: null,
      selectedColumn: null,
      selectedNumber: null,
      hidden: false,
      displayedClues: 0
    };
  },
  computed: {
    ...mapState({
      nBackLevel: state => state.game.n_level,
      interval: state => state.game.time,
      clues: state => state.game.clues,
      curPoints: state => state.game.curPoints
    })
  },
  created() {
    this.history = [];
    this.tries = {
      number: false,
      position: false
    };
    this.pushToHistory();
    this.engine = setInterval(this.createSelection, this.interval);
  },
  mouted: function() {},

  methods: {
    ...mapMutations([
      "SET_LASTPOINT",
      "SET_MISSED_POINT",
      "SET_WRONG_POINT",
      "SET_RIGHT_POINT"
    ]),
    ...mapActions([]),
    createSelection() {
      console.log("created ", this.displayedClues);
      this.checkDisplayedClues();
      this.hideSelection();
      setTimeout(this.showSelection, this.clueFadeOutTime);
    },
    checkDisplayedClues() {
      this.displayedClues++;
      if (this.displayedClues >= this.clues) {
        console.log("clear runnin engine");
        clearInterval(this.engine);
        this.$router.push("game-over");
      }
    },
    hideSelection() {
      this.selectedColumn = null;
      this.selectedRow = null;
      this.hidden = true;
    },
    showSelection() {
      this.checkForPenalty();
      this.selectedColumn = this.getRandomPosition();
      this.selectedRow = this.getRandomPosition();
      this.selectedNumber = this.getRandomNumber();
      this.tries.number = false;
      this.tries.position = false;
      this.pushToHistory();
      this.hidden = false;
    },
    checkForPenalty() {
      if (this.history.length < 1 + this.nBackLevel) {
        return 0;
      }
      if (this.tries.number === false && this.checkNumber()) {
        this.SET_MISSED_POINT("number");
      }
      if (this.tries.position === false && this.checkPosition()) {
        this.SET_MISSED_POINT("position");
      }
      return 0;
    },
    getRandomPosition() {
      return Math.floor(Math.random() * 3 + 1);
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
    userSelectedNumber() {
      if (this.tries.number) {
        return;
      }
      this.tries.number = true;
      if (this.checkNumber()) {
        this.SET_RIGHT_POINT("number");
      } else {
        this.SET_WRONG_POINT("number");
      }
    },
    userSelectedPosition() {
      if (this.tries.position) {
        return;
      }
      this.tries.position = true;
      if (this.checkPosition()) {
        this.SET_RIGHT_POINT("position");
      } else {
        this.SET_WRONG_POINT("position");
      }
    },
    checkNumber() {
      const length = this.history.length;

      return (
        this.selectedNumber ===
        this.history[length - 1 - this.nBackLevel].number
      );
    },
    checkPosition() {
      const length = this.history.length;
      const target = this.history[length - 1 - this.nBackLevel];
      return (
        this.selectedColumn === target.column && this.selectedRow === target.row
      );
    },
    pushToHistory() {
      this.history.push({
        column: this.selectedColumn,
        row: this.selectedRow,
        number: this.selectedNumber
      });

      const length = this.history.length;

      if (length > this.nBackLevel + 1) {
        this.history = this.history.splice(length - this.nBackLevel - 1);
      }
    }
  }
};
</script>

<style lang="scss">
@import url("../themes/gamePlay.scss");
</style>