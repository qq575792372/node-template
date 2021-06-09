const express = require('express');
const swig = require('swig');
const cors = require('cors');
const bodyParser = require('body-parser');
// 自定义配置
const router = require('../src/router');
const env = require('../env');
const app = express();

// // 配置跨域 
app.use(cors({
  origin: env.BASE_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'],
  alloweHeaders: ['Conten-Type', 'Authorization'],
  credentials: true
}));

// 使用body-parser 用于处理post请求
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// 配置swig模板渲染 
app.set('view cache', true);
app.set('views', './src/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

// 代理静态资源，网页内使用 /assets/1.png 或者 /styles/index.css 可以访问
app.use('/assets', express.static('src/assets'));
app.use('/styles', express.static('src/styles'));

// 路由拦截
app.all('/*', function (httpRequest, httpResponse, next) {
  console.log('拦截请求参数>', 'query：', httpRequest.query, ' body：', httpRequest.body);
  next();
});

// 引入路由
router(app)

// 配置404页面，要在引入路由之后
app.get('*', function (httpRequest, httpResponse) {
  httpResponse.render('404.html')
})

// 创建本地服务
const server = app.listen(9000, 'localhost', function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('> 服务启动完成，访问地址： http://%s:%s', host, port);
});