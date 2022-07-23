import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

export const state = () => {
  return {
    isLoggedin: false,
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
};

const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
