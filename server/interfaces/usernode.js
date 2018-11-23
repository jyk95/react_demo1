const mysql = require('mysql')
const express = require('express')
const router = express.Router()

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

// router.get('/')
// 个人节点相关信息
router.post('/usernode', (req, res) => {
  // 将user_node这张表中的数据更新到节点总表中
  db.query(`SELECT SUM(user_node.vet) AS self_vet,SUM(user_node.vtho) AS self_vtho \
  FROM user_node WHERE user_node.userid = ${req.body.uid}`, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send('error line:19').end()
    } else if (data) {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data[0]
      }).end()
    }
  })
})

module.exports = router
