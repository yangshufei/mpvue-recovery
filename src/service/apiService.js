const {post, get} = require('../utils/request').default

export default {
  /**
   * 主题首页
   */
  homeList (page = 1, tab = 'ask', limit = 10, mdrender = true) {
    return get('/api/v1/topics', {page, tab, limit, mdrender})
  },
  /**
   * 新建主题
   */
  createTheme (title, tab, content) {
    return post('/api/v1/topics', {title, tab, content})
  },
  /**
   * 验证accessToken的正确性
   */
  accToken (accessToken) {
    return post('/api/v1/accessToken', {accessToken})
  }
}
