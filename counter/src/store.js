import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    reset(state) {
      state.count = 0;
    },

    setValue(state, payload) {
      state.count = parseInt(payload);
    }
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },

    decrement({ commit }) {
      commit("decrement");
    },

    reset({ commit }) {
      commit("reset");
    },

    setValue({ commit }, payload) {
      commit("setValue", payload);
    }
  },

  getters: {
    counter: state => {
      return state.count;
    }
  }
});

export default store;