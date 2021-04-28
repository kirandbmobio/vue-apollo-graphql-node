<template>
  <div class="auth-login">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">
              Login
            </h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
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
                  Login
                </button>
              </div>
              <div class="form-group">
                <router-link to="/auth/register">
                  Need an account? Register Now!
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
      },
    };
  },
  methods: {
    ...mapActions({ login: "Auth/loginUser" }),
    async loginUser() {
      await this.login(this.user);
    },
  },
};
</script>

<style></style>
