const mysql = require('mysql')
const express = require('express')
const router = express.Router()

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

// vet排行榜
router.post('/vetrank', (req, res) => {
  // eslint-disable-next-line
  db.query(`SELECT SUM(user_node.vet) AS sumvet,\
  user_info.username AS username\
  FROM user_node INNER JOIN user_info \
  WHERE user_node.userid=user_info.id\
   GROUP BY userid ORDER BY SUM(vet) DESC LIMIT 5`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误 line:20').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  });
})

router.post('/vthorank', (req, res) => {
  // eslint-disable-next-line
  db.query(`SELECT SUM(user_node.vtho) AS sumvtho,user_info.username AS username\
  FROM user_node INNER JOIN user_info \
  WHERE user_node.userid=user_info.id\
   GROUP BY userid ORDER BY SUM(vtho) DESC LIMIT 5`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误 line:20').end()
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      }).end()
    }
  });
})

module.exports = router
