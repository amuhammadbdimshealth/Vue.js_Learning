<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>
      User Name:
      <b>{{ name }}</b>
    </p>
    <p>
      User Age:
      <b>{{ age }}</b>
    </p>
    <p>User Name Switched: {{ switchName () }}</p>
    <button @click="resetName">Reset Name By $Emit</button>
    <button @click="resetFn">Reset Name By Callback</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: Number,
    resetFn: Function
  },
  methods: {
    switchName() {
      //   this.name = this.name
      //     .split("")
      //     .reverse()
      //     .join("");
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasChanged", this.name);
    }
  },
  created() {
    eventBus.$on("ageWasChanged", age => {
      console.log("HANDLE");
      this.age = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
