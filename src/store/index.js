import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    curPage: '',
    headItem:'',
    menuItem:''
  },
  mutations: {
    SET_CURPAGE(state,page) {
      // 变更状态
      state.curPage = page;
    },
    SET_HEAD(state,headItem) {
      // 变更状态
      state.headItem = headItem;
    },
    SET_MENU(state,menuItem) {
      // 变更状态
      state.menuItem = menuItem;
    }
  }
})
export default store