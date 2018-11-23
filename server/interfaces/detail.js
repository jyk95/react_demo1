const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

router.post('/joindetail', (req, res) => {
  db.query(`SELECT * FROM join_detail WHERE userid=${req.body.uid}`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  })
})
router.post('/integraldetail', (req, res) => {
  db.query(`SELECT * FROM integral_detail WHERE userid=${req.body.uid}`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  })
})
router.post('/profitdetail', (req, res) => {
  db.query(`SELECT * FROM profit_detail WHERE userid=${req.body.uid}`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  })
})

router.post('/tixiandetail', (req, res) => {
  db.query(`SELECT * FROM tixian_detail WHERE userid=${req.body.uid}`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  })
})

module.exports = router
