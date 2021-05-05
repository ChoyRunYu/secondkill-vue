import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    isShowLoginDialog: false
  },
  mutations:{
    SET_ISSHOWLOGINDIALOG(state, value){
      state.isShowLoginDialog = value
    }
  },
  modules: {
    user
  },
  getters
})

export default store
