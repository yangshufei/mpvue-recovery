import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  isLogin: false,
  userToken: wx.getStorageSync('userToken'),
  username: ''
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
