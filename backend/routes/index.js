var express = require('express');
var router = express.Router();

const auth = require('../config/auth');
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
