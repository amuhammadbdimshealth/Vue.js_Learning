<template>
  <div class="container">
    <!-- Header -->
    <server-header></server-header>
    <hr />
    <div class="row">
      <!-- ServerList -->
      <server-list></server-list>
      <!-- ServerDetails -->
      <server-details></server-details>
    </div>
    <hr />
    <!-- ServerManagement -->
    <server-management></server-management>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ServerDetails from "./ServerDetails.vue";
import ServerList from "./ServerList.vue";
import ServerManagement from "./ServerManagement.vue";
export default {
  components: {
    "server-header": Header,
    "server-details": ServerDetails,
    "server-list": ServerList,
    "server-management": ServerManagement
  }
};
</script>

<style>
</style>
