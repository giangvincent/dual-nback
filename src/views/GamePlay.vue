
<template>
  <div id="game-play" class="flex flex-col content-center justify-center flex-wrap">
    <navigator :nlevel="nBackLevel"></navigator>
    <div class="mb-6 text-xl">
      Clues: <span>{{ clues - displayedClues }}</span>
    </div>
    <!-- indicator -->
    <div class="grid mx-auto">
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
    <div class="controls flex flex-wrap justify-between mx-auto mt-6">
      <button
        @click="userSelectedPosition"
        class="btn-3d rounded border-2 uppercase text-xl py-2 px-4 rounded"
        :class="{'btn-3d-active': selectedBtnPos}"
      >← Position</button>
      <button
        @click="userSelectedNumber"
        class="btn-3d rounded border-2 uppercase text-xl py-2 px-4 rounded"
        :class="{'btn-3d-active': selectedBtnNum}"
      >Number →</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapState, mapActions, mapMutations } from "vuex";
import Navigator from "../components/Navigator"

export default {
  name: "game-play",
  data() {
    return {
      selectedBtnNum: false,
      selectedBtnPos: false,
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
  components: {
    Navigator: Navigator
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
  mounted: function() {},

  methods: {
    ...mapMutations([
      "SET_LASTPOINT",
      "SET_MISSED_POINT",
      "SET_WRONG_POINT",
      "SET_RIGHT_POINT",
      "INCR_CORRECT_CLUES",
      "RESET_POINTS"
    ]),
    ...mapActions([]),
    async createSelection() {
      console.log("created ", this.displayedClues);
      this.checkForPenalty();
      this.hideSelection();
      var self = this
      this.checkDisplayedClues().then(() => {
        if (this.displayedClues < this.clues) {
          setTimeout(self.showSelection, self.clueFadeOutTime);
        }
      });
    },
    checkDisplayedClues() {
      if (this.displayedClues >= this.clues) {
        console.log("clear runnin engine");
        clearInterval(this.engine);
        this.$router.push("game-pause");
      }
      this.displayedClues++;
      return new Promise((res, rej) => {
        res();
        rej();
      })
    },
    hideSelection() {
      this.selectedColumn = null;
      this.selectedRow = null;
      this.hidden = true;
    },
    showSelection() {
      this.selectedColumn = this.getRandomPosition();
      this.selectedRow = this.getRandomPosition();
      this.selectedNumber = this.getRandomNumber();
      this.tries.number = false;
      this.tries.position = false;
      this.selectedBtnPos = false;
      this.selectedBtnNum = false;
      this.hidden = false;
      this.pushToHistory();
      
    },
    checkForPenalty() {
      if (this.history.length < this.nBackLevel + 1) {
        return 0;
      }
      if (this.tries.number === false && this.checkNumber()) {
        this.SET_MISSED_POINT("number");
        this.INCR_CORRECT_CLUES()
      }
      if (this.tries.position === false && this.checkPosition()) {
        this.SET_MISSED_POINT("position");
        this.INCR_CORRECT_CLUES()
      }
      return 0;
    },
    getRandomPosition() {
      return Math.floor(Math.random() * 3 + 1)
    },
    getRandomNumber() {
      var randNumber = Math.floor(Math.random() * (this.nBackLevel + 2) * 2 + 0)
      return randNumber > 9 ? 9 : randNumber
    },
    userSelectedNumber() {
      if (this.tries.number) {
        return;
      }
      this.selectedBtnNum = true;
      this.tries.number = true;
      if (this.checkNumber()) {
        this.INCR_CORRECT_CLUES()
        this.SET_RIGHT_POINT("number");
      } else {
        this.SET_WRONG_POINT("number");
      }
    },
    userSelectedPosition() {
      if (this.tries.position) {
        return;
      }
      this.selectedBtnPos = true;
      this.tries.position = true;
      if (this.checkPosition()) {
        this.INCR_CORRECT_CLUES()
        this.SET_RIGHT_POINT("position");
      } else {
        this.SET_WRONG_POINT("position");
      }
    },
    checkNumber() {
      const length = this.history.length;
      return (
        this.selectedNumber ===
        this.history[length - this.nBackLevel - 1].number
      );
    },
    checkPosition() {
      const length = this.history.length;
      const target = this.history[length - this.nBackLevel - 1];
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
      if (length > this.nBackLevel) {
        this.history = this.history.slice(length - this.nBackLevel - 1, length);
      }
      // console.log(JSON.stringify(this.history))
    }
  }
};
</script>

<style lang="scss">
@import url("../themes/gamePlay.scss");
</style>