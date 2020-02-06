<template>
  <div class="container">
    <form v-if="isSubmitted==false">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <app-fullName v-model="fullname"></app-fullName>
          <!-- Mail -->
          <div class="form-group">
            <label for="mail">Mail</label>
            <input type="text" id="nail" name="mail" class="form-control" v-model="mail" />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                v-model="password"
              />
            </label>
          </div>

          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <h5>
              <strong>Store Data</strong>
            </h5>
            <label for="yes">
              <input type="radio" id="yes" value="Yes" v-model="storeData" /> Yes
            </label>
            <label for="no">
              <input type="radio" id="no" value="No" v-model="storeData" /> No
            </label>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted==true">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullname }}</p>
            <p>Mail: {{ mail }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";
export default {
  data() {
    return {
      //   firstname: "",
      //   lastname: "",
      fullname: "",
      mail: "",
      password: "",
      storeData: "Yes",
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
