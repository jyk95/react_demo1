const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

router.get('/', (req, res) => {
  res.send('node').end()
})

// 节点页面数据接口
router.post('/api/jiedian', (req, res) => {
  // eslint-disable-next-line
  db.query(`UPDATE node_info SET node_sum_vet = \
  (SELECT SUM(vet) FROM user_node)`, (err, data) => {
    if (err) {
      res.status(500).send('数据库错误 + line:24').end()
    } else {
      // eslint-disable-next-line
      db.query(`SELECT * FROM node_info`, (err, data) => {
        if (err) {
          res.status(500).send('数据库错误 + line:20').end()
        } else {
          res.status(200).json({ status: true, message: '请求成功', data: data })
        }
      })
    }
  })
})

// 交易接口
router.post('/api/join', (req, res) => {
  return new Promise((resolve, reject) => {
    // 验证交易号
    db.query(`SELECT number_vet,purse_vtho, purse_address FROM join_table \
   WHERE join_number='${req.body.purchase_number}'`, (err, data) => {
      if (err) {
        reject(err)
      } else if (data.length === 0) {
        res.status(200).json({ status: false, message: '交易号错误' }).end()
      } else {
        res.status(200).json({ status: true, message: '参与成功' }).end()
        resolve(data[0])
      }
    })
  }).then((data) => {
    const joindata = data
    // 将用户的参与记录保存到节点数据中
    db.query(`INSERT INTO user_node (vet,userid,node_address,add_time)\
    VALUES (${data.number_vet},${req.body.uid},'${req.body.node_address}',NOW())`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return new Promise((resolve, reject) => {
          // 保存成功后添加到用户钱包的表中
          db.query(`INSERT INTO purse (purse_name, address, userid, purse_vet, purse_vtho)\
        VALUES ('我的钱包','${joindata.purse_address}',${req.body.uid},${joindata.number_vet},${joindata.purse_vtho})`, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              resolve(joindata.number_vet)
            }
          })
        }).then((vetNum) => {
          // 将参与明细保存到对应表中
          db.query(`INSERT INTO join_detail (message, userid, add_time)\
          VALUES ('VET ${vetNum}', ${req.body.uid} , NOW())`)
        })
      }
    });
  })
})

module.exports = router;
