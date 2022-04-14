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

router.post('/:userId/contacts/add', /*auth,*/ userController.addContact);

router.get('/:userId/contact/:contactId',/*auth,*/userController.getContact);



module.exports = router;
