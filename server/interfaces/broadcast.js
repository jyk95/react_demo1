const express = require('express')
const mysql = require('mysql');
const router = express.Router();
const pathLib = require('path');
const fs = require('fs');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '155999',
  database: 'jiedian'
})

router.get('/', (req, res) => {
  res.send('lunbotu')
})

router.post('/', (req, res) => {
  // 将上传过来的文件添加后缀及改名
  console.log(req.files, req.body)
  if (req.files[0]) {
    var ext = pathLib.parse(req.files[0].originalname).ext;
    var oldPath = req.files[0].path;
    var newPath = req.files[0].path + ext;
    var newFileName = req.files[0].filename + ext;
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('file opration error').end();
      } else {
        const imgsrc = '/upload/' + newFileName
        db.query(`INSERT INTO broadcast (src, topage) \
        VALUE ('${imgsrc}','${req.body.topage}')`, (err, data) => {
          if (err) {
            console.log(err)
          }
        })
      }
    });
  }
})
router.post('/api', (req, res) => {
  // eslint-disable-next-line
  db.query(`SELECT * FROM broadcast`, (err, data) => {
    if (err) {
      res.status(500).json({ status: false, message: 'database error' })
    } else {
      res.status(200).json({
        status: true,
        message: '请求成功',
        data: data
      })
    }
  })
})

module.exports = router;
