const express = require('express')
var router = express.Router();

router.use('/login', require('./interfaces/login'));
router.use('/broadcast', require('./interfaces/broadcast'));
router.use('/register', require('./interfaces/register'));
router.use('/node', require('./interfaces/jiedian'));
router.use('/usernode', require('./interfaces/usernode'));
router.use('/rank', require('./interfaces/ranklist'));
router.use('/purse', require('./interfaces/purse'));
router.use('/detail', require('./interfaces/detail'));

module.exports = router;
