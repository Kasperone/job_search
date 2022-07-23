import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
