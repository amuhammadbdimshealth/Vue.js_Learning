<template>
  <div>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        class="form-control"
        v-model="firstName"
        @input="handleNameChanged"
      />
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        class="form-control"
        v-model="lastName"
        @input="handleNameChanged"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    handleNameChanged() {
      const fullName = this.firstName + " " + this.lastName;
      this.$emit("input", fullName);
    }
  }
};
</script>

<style>
</style>