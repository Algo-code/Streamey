var express = require('express');
var router = express.Router();
const auth = require('../config/auth');

const userController = require('../controllers/user');

/* POST Register User Account. */
router.post('/register', userController.registerUser);

/* POST Login User. */
router.post('/signin', userController.loginUser);

/* GET User Profile. */
router.get('/me', auth, userController.getUser);

router.post('/:user_id/contacts/add', auth, userController.addContact);

router.post('/:user_id/chat/create', auth, userController.createChat);


module.exports = router;
