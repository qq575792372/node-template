/**
 * 主路由
 */
module.exports = function (router) {
  // 不同的路由js需要引入进来
  router.use('/', require('./home.js'))
  router.use('/user', require('./user.js'))
}