<template>
  <div class="quotes-added">
    <h2>Quotes Added</h2>
    <div class="app-progress-bar">
      <div
        class="app-progress-bar bg-primary"
        :style="meter"
      >{{ progressbarQuotesCount }} / {{ maxQuotes }}</div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  props: ["numQuotes"],
  data() {
    return {
      maxQuotes: eventBus.maxQuotes
    };
  },
  computed: {
    progressbarQuotesCount() {
      if (this.numQuotes > eventBus.maxQuotes) {
        //store the maxQuote in a common location where all components can access like the eventBus
        return eventBus.maxQuotes;
      }
      return this.numQuotes;
    },
    meter() {
      let width = 100 * (this.progressbarQuotesCount / eventBus.maxQuotes);
      return {
        backgroundColor: "#337ab7",
        width: width + "%"
      };
    }
  },
  updated() {
    console.log(eventBus.maxQuotes);
  }
};
</script>

<style scoped>
.quotes-added {
  margin-bottom: 10px;
}
.app-progress-bar {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 24px;
  color: white;
  background-color: rgb(214, 214, 214);
  border: 0.5px solid rgb(184, 183, 183);
  text-align: center;
  font-size: 10px;
  transition: all ease-in-out 0.5s;
}
</style>>
