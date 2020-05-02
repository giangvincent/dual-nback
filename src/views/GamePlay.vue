<template>
  <div id="game-play">
    <div class="score">
      NBack:
      <input class="score__input" v-model.number="nBackLevel" />
      - Points: {{ points }}
    </div>
    <table class="grid">
      <tr class="grid__row" v-for="row in rows" v-bind:key="row">
        <td
          class="grid__cell"
          v-for="column in columns"
          :key="column"
          :class="{ grid__selected: (selectedRow === row && selectedColumn === column), hidden }"
        >
          <span
            class="grid__number"
            v-if="selectedRow === row && selectedColumn === column"
          >{{ selectedNumber }}</span>
          <span v-else>&nbsp;</span>
        </td>
      </tr>
    </table>
    <div class="controls">
      <div @click="userSelectedPosition" class="controls__left">← Position</div>
      <div @click="userSelectedNumber" class="controls__right">Number →</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "game-play",
  data() {
    return {
      columns: 3,
      rows: 3,
      selectedRow: 2,
      selectedColumn: 2,
      selectedNumber: 5,
      nBackLevel: 1,
      points: 0,
      hidden: false
    };
  },
  created() {
    window.addEventListener("keydown", this.onKey);

    this.interval = 2000;
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
    ...mapState({})
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