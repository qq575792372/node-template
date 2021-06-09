const request = require('../utils/request.js')

/**
 * 查询用户列表
 * @param {*} params 
 */
exports.getList = async function getList(params) {
  return request({
    url: '/api/user/getList',
    method: 'post',
    data: params
  })
}

/**
 * 查询用户详情
 * @param {*} params 
 */
exports.getDetail = async function (params) {
  return request({
    url: '/api/getUserDetail',
    method: 'get',
    params: params
  })
}