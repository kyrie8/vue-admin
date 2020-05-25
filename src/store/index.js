import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val) {
        return {
        info: val.info
      }
   }
})],
  state: {
    info:{
      user_name: '',
      user_password: ''
    }
  },
  mutations: {
    user_info_edit(state,payload){
      state.info.user_name = payload.name
      state.info.user_password = payload.password
    }
  },
  actions: {
    user_info(context,payload){
      context.commit('user_info_edit', payload)
    }
  },
  modules: {
  }
})
