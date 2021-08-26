import Vue from "vue";
import Vuex from "vuex";
import checkout from "./checkout";
import options from "./options";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    checkout,
    options,
  },
});
