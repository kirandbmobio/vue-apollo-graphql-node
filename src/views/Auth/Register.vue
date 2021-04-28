<template>
  <div class="auth-login">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">
              Register
            </h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUpUser">
              <div class="form-group">
                <label
                  for="firstName"
                  class="text-primary font-weight-bold font-size-sm"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  v-model="user.firstName"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group">
                <label
                  for="lastName"
                  class="text-primary font-weight-bold font-size-sm"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="user.lastName"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-weight-bold font-size-sm"
                  >Username</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="user.username"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label
                  for="email"
                  class="text-primary font-weight-bold font-size-sm"
                  >E-Mail</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="user.email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label
                  for="password"
                  class="text-primary font-weight-bold font-size-sm"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <div class="form-group">
                <router-link to="/auth/login">
                  Already have an account? Login Now!
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions({ registerUser: "Auth/registerUser" }),
    signUpUser() {
      console.log("user", this.user);
      this.registerUser(this.user);
    },
  },
};
</script>

<style></style>
