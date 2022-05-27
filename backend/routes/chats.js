var express = require('express');
var router = express.Router();
const auth = require('../config/auth');

const chatController = require('../controllers/chat');

router.post('/api/:userId/chat/create', /* auth,*/ chatController.createChat);

router.post('/api/:userId/:chatId', /*auth,*/ chatController.sendMessage);

router.get('/api/:userId/chats', /* auth,*/ chatController.getAllChats);

router.get('/api/:userId/contacts', /* auth,*/ chatController.getAllContacts);

router.get('/api/:userId/chat/:chatId', /*auth, */ chatController.getChat);

module.exports = router;
