const express = require('express')
const router = express.Router()
// 引入api
const {
  getList
} = require('../api/user_list.js')

// 用户列表页面
router.get('/userList', function (httpRequest, httpResponse) {
  getList({
    title: '',
    pageNo: 1,
    pageSize: 10
  }).then(res => {
    console.log('user getList ', res.data)
    // 获取数据后渲染页面
    httpResponse.render('userList/userList.html', {
      message: 'userList.html',
      list: res.data
    })
  })
})

module.exports = router;