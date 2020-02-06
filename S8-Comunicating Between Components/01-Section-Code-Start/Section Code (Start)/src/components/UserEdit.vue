<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>
      User Name:
      <b>{{ name }}</b>
    </p>
    <p>
      User Age:
      <b>{{ age }}</b>
    </p>
    <button @click="handleChangeAge">Change Age (Event Bus)</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String,
      default: "Arif"
    },
    age: Number
  },
  methods: {
    handleChangeAge() {
      this.age = 30;
      // eventBus.$emit("ageWasChanged", this.age);
      eventBus.changeAge(this.age); //centralised Code on eventBus
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
