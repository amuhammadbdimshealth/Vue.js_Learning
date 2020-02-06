<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change Name</button>
    <hr />
    <p>UserName: {{ name }}</p>
    <p>
      User Age:
      <b>{{ age }}</b>
    </p>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :name="name"
          @nameWasChanged="handleNameChange"
          :resetFn="resetName"
          :age="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :name="name" :age="age"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data: function() {
    return {
      name: "Max",
      age: 27
    };
  },
  methods: {
    changeName() {
      this.name = this.name == "Max" ? "Arif" : "Max";
    },
    handleNameChange($event) {
      this.name = $event;
      console.log($event);
    },
    resetName() {
      this.name = "Max";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
