<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr />
    <button @click="changeStatus">Click</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Normal";
    }
  }
};
</script>

<style>
</style>
