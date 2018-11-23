const express = require('express')
const common = require('../libs/common')
const mysql = require('mysql')
var router = express.Router();

// 连接数据库
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

router.get('/', (req, res) => {
  res.render('login.html', {})
})

router.post('/api/login', (req, res) => {
  // res.render('login.html')
  db.query(`SELECT id,username,mobile,avater,integral FROM user_info\
   WHERE username='${req.body.username}' AND password='${req.body.password}'`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误').end()
    } else if (data.length === 0) {
      res.status(200).send('用户不存在').end()
    } else {
      res.status(200).json({ data: data[0], status: true, message: '登录成功' }).end()
    }
  })
  // console.log(req.body.username)
})

module.exports = router;
