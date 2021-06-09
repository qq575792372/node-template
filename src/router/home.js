const express = require('express')
const router = express.Router()

// 首页路由
router.get('/', function (httpRequest, httpResponse) {
  httpResponse.render('index.html', {
    message: 'index.html'
  })
})

module.exports = router;