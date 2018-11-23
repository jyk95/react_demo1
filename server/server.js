const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const router = require('./router.js')
const path = require('path')

var server = express()

// 跨域请求
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 1.请求数据
const multerObj = multer({ dest: './static/upload' })
server.use(bodyParser.urlencoded())
server.use(multerObj.any())

// 2.cookie 、 session
server.use(cookieParser());
(function () {
  var keys = [];
  for (var i = 0; i < 1000; i++) {
    keys[i] = 'dd_' + Math.random()
  }
  server.use(cookieSession({
    name: 'session_id',
    keys: keys,
    maxAge: 20 * 60 * 1000 // 20min
  }))
})();

// 3.模板
server.engine('html', require('express-art-template'))
server.set('views', path.join(__dirname, './views/'))

// 4.route
server.use(router)

// 5.static
server.use(express.static('./static/'))

server.listen(8000, function () {
  console.log('running 8000...')
})
