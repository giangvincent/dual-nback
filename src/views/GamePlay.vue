<template>
  <div id="game-play" class="flex flex-col">
    <div class="score mb-3">
      NBack:
      <!-- <input class="score__input" v-model.number="nBackLevel" /> -->
      - Points: {{ points }}
    </div>
    <div class="grid">
      <div class="grid__row flex is-mobile" v-for="row in rows" v-bind:key="row">
        <div
          class="grid__cell w-1/3"
          v-for="column in columns"
          :key="column"
          :class="{ grid__selected: (selectedRow === row && selectedColumn === column), hidden }"
        >
          <span
            class="grid__number"
            v-if="selectedRow === row && selectedColumn === column"
          >{{ selectedNumber }}</span>
          <span v-else>&nbsp;</span>
        </div>
      </div>
    </div>
    <div class="controls flex flex-wrap justify-between m-auto mt-3">
      <button @click="userSelectedPosition" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full">← Position</button>
      <button @click="userSelectedNumber" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-full">Number →</button>
    </div>
  </div>
</template>

<script>
// TODO: add navigation
// TODO: define gameover
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "game-play",
  data() {
    return {
      columns: 3,
      rows: 3,
      selectedRow: null,
      selectedColumn: null,
      selectedNumber: null,
      points: 0,
      hidden: false
    };
  },
  created() {
    window.addEventListener("keydown", this.onKey);

    // this.interval = 2000;
    this.history = [];
    this.tries = {
      number: false,
      position: false
    };
    this.pushToHistory();
    this.engine = setInterval(this.createSelection, this.interval);
  },
  mouted: function() {},
  computed: {
    ...mapState({
      nBackLevel: state => state.game.n_level,
      interval: state => state.game.time
    })
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    createSelection() {
      this.hideSelection();
      setTimeout(this.showSelection, 200);
    },
    hideSelection() {
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
        this.points -= 1;
      }
      if (this.tries.position === false && this.checkPosition()) {
        this.points -= 1;
      }
      return 0;
    },
    getRandomPosition() {
      return Math.floor(Math.random() * 3 + 1);
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
    onKey(event) {
      const NUMBER = "ArrowRight";
      const POSITION = "ArrowLeft";
      const key = event.key;

      if (key === NUMBER) {
        this.userSelectedNumber();
      } else if (key === POSITION) {
        this.userSelectedPosition();
      }
    },
    userSelectedNumber() {
      if (this.tries.number) {
        return;
      }
      this.tries.number = true;
      this.points += this.checkNumber() ? 1 : -1;
    },
    userSelectedPosition() {
      if (this.tries.position) {
        return;
      }
      this.tries.position = true;
      this.points += this.checkPosition() ? 1 : -1;
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