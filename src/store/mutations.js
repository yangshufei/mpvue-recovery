import * as types from './types.js'

const mutations = {
  [types.LOGIN]: (state, data) => {
    // 更改token的值
    state.token = data
    wx.setStorageSync('userToken', data)
  },
  [types.LOGOUT]: (state) => {
    // 登出的时候要清除token
    state.token = null
    wx.removeStorageSync('userToken')
  },
  // 这步可有可无，根据自己需求去写
  [types.USERNAME]: (state, data) => {
    // 把用户名存起来
    state.username = data
    wx.setStorageSync('username', data)
  }
}

export default mutations
