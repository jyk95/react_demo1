/* eslint-disable */
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
  res.send('register').end()
})

router.post('/api/register', (req, res) => {
  let result = '';
  for (var i = 0; i < 6; i++) {
    let ranNum = Math.ceil(Math.random() * 25);
    // 大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
    let num = String.fromCharCode(65 + ranNum)
    result += num
  }
  // 生成的邀请码
  let inviteCode = result.toString()
  return new Promise((resolve, reject) => {
    // 验证用户名及手机号有无重复
    db.query(`SELECT username , mobile FROM user_info \
    WHERE username='${req.body.username}' OR mobile='${req.body.mobile}'`, (err, data) => {
      if (err) {
        res.status(500).send('数据库错误 line：78')
      } else if (data.length >= 1) {
        res.status(200).json({status: false, message: '用户名或手机号已注册'})
      } else if (data.length === 0) {
        resolve()
      }
    })
  }).then(() => {
    // 将注册信息添加进表
    db.query(`INSERT INTO user_info (username, password, mobile, integral, invite_code)\
     VALUES ('${req.body.username}','${req.body.password}','${req.body.mobile}',3000,'${inviteCode}')`, (err, data) => {
      if (err) {
        res.status(500).send('数据库错误 line：89')
      } else {
        res.status(200).json({status: true, message: '注册成功' })
        return new Promise((resolve, reject) => {
          // 判断注册用户有无填邀请码
          if (req.body.inviteCode !== '') {
            db.query(`SELECT * FROM user_info \
            WHERE invite_code='${req.body.inviteCode}'`, (err, data) => {
              if (err) {
                console.log(err)
              } else if (data.length !== 0){
                resolve(data[0])
              }
            })
          }
        }).then((matchUser) => {
          // 填了邀请码验证对应验证码的用户，如果存在，
          // 将其积分加1000，同时生成一条积分记录，添加到对应的表
          var userID = matchUser.id
          db.query(`UPDATE user_info SET integral=integral+1000 \
          WHERE ID=${userID}`, (err, data) => {
            if (err) {
              console.log(err)
            } else {
              db.query(`INSERT INTO integral_detail (userid, detail_info, add_time)\
                VALUES ('${userID}', '邀请用户获得1000积分',NOW())`, (err, data) => {
                if (err) {
                  console.log(err)
                }
              });
            }
          })
        }).then(() => {
          // 注册成功的用户立即获得3000积分，同时将记录保存到积分明细
          db.query(`INSERT INTO integral_detail (userid, detail_info,add_time) 
          VALUES ((SELECT id FROM user_info WHERE mobile='${req.body.mobile}'),\
           '注册成功获得3000积分',NOW())`, (err, data) => {
            if (err) {
              console.log(err)
            }
          })
        })
      }
    })
  })
})

module.exports = router;
