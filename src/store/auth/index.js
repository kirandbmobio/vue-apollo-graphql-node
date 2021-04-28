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
  SET_TOKEN: async (oldState, token) => {
    state.token = token;
  },
};
const actions = {
  registerUser: async ({ commit }, userData) => {
    try {
      console.log(userData, commit);

      commit("SET_USER", userData);
      commit("SET_TOKEN");
    } catch (err) {
      return err;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
