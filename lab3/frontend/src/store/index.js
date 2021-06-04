import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    ADD_POST(state, { title, text }) {
      state.model.createPost(title, text);
    },
    SAVE_COMMENT(state, { id, comment }) {
      state.model.saveComment(id, comment);
    },
    DELETE(state, id) {
      state.model.delete(id);
    },
    LOAD(state) {
      state.model.getPostsFromServer();
    },
  },
  actions: {
    SAVE_COMMENT({ commit }, { id, comment }) {
      commit("SAVE_COMMENT", { id, comment });
    },
  },
  modules: {},
});
