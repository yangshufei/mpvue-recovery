const {post, get} = require('../utils/request').default

export default {
  // 用户注册
  userRegister (data) {
    return post('/api/register', data)
  },
  // 用户登录
  userLogin (data) {
    return post('/api/login', data)
  },
  // 获取用户
  getUser () {
    return get('/api/user')
  },
  // 删除用户
  delUser (data) {
    return post('/api/delUser', data)
  }
}
