var express = require('express');
var router = express.Router();

const auth = require('../config/auth');
const userController = require('../controllers/user');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.status(200).json({
    message: 'Welcome Home'
  });
});


module.exports = router;
