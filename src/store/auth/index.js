import {
  REGISTER_USER,
  AUTHENTICATED_USER,
  AUTHENTICATE_USER,
} from "../../gql";
import { apolloClient } from "../../vue-apollo";
import router from "../../router";
const state = {
  authStatus: false,
  user: {},
  token: localStorage.getItem("apollo-token") || null,
};
const getters = {
  user: (prevState) => prevState.user,
  authStatus: (prevState) => prevState.authStatus,
  isAuth: (prevState) => !!prevState.token,
};
const mutations = {
  SET_USER: async (oldState, payload) => {
    oldState.user = payload.user;
    state.authStatus = true;
  },
  SET_TOKEN: async (oldState, payload) => {
    oldState.token = payload.token;
  },
  LOGOUT_USER: async (oldState) => {
    oldState.user = {};
    oldState.authStatus = false;
    oldState.token = null;
  },
};
const actions = {
  loginUser: async ({ dispatch }, userData) => {
    try {
      let {
        data: { authenticateUser },
      } = await apolloClient.query({
        query: AUTHENTICATE_USER,
        variables: userData,
      });
      dispatch("setAuthUserData", authenticateUser);
      //   commit("SET_USER", { user: authenticateUser });
      //   commit("SET_TOKEN", authenticateUser);
      //   /* set token to localStorage */
      //   localStorage.setItem(
      //     "apollo-token",
      //     authenticateUser.token.split(" ")[1]
      //   );
      //   /* redirect the use to the dashboard */
      //   router.push("/dashboard");
    } catch (err) {
      return err;
    }
  },
  registerUser: async ({ dispatch }, userData) => {
    try {
      let {
        data: { registerUser },
      } = await apolloClient.mutate({
        mutation: REGISTER_USER,
        variables: userData,
      });
      dispatch("setAuthUserData", registerUser);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  setAuthUserData: async ({ commit }, payload) => {
    commit("SET_USER", { user: payload });
    commit("SET_TOKEN", payload);
    /* set token to localStorage */
    localStorage.setItem("apollo-token", payload.token.split(" ")[1]);
    /* redirect the use to the dashboard */
    router.push("/dashboard");
  },
  getAuthUser: async ({ commit, dispatch }) => {
    try {
      console.log("123");
      let {
        data: { authUserProfile },
      } = await apolloClient.query({
        query: AUTHENTICATED_USER,
      });
      console.log(authUserProfile);
      commit("SET_USER", { user: authUserProfile });
    } catch (err) {
      console.log(err);
      dispatch("logoutUser");
      return err;
    }
  },
  logoutUser: async ({ commit }) => {
    localStorage.removeItem("apollo-token");
    commit("LOGOUT_USER");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
