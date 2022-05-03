var express = require('express');
var router = express.Router();
const auth = require('../config/auth');

const userController = require('../controllers/user');

/* POST Register User Account. */
router.post('/api/register', userController.registerUser);

/* POST Login User. */
router.post('/api/signin', userController.loginUser);

/* GET User Profile. */
 
router.get('/api/:userId/me', /*auth,*/ userController.getUser);

router.post('/api/:userId/contacts/add', /*auth,*/ userController.addContact);

router.get('/api/:userId/contact/:contactId',/*auth,*/userController.getContact);
 

router.post('/api/:userId/contacts/add', /*auth,*/ userController.addContact);

router.get(
  '/api/:userId/contact/:contactId',
  /*auth,*/ userController.getContact
);

module.exports = router;
