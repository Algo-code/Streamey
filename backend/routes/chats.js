var express = require('express');
var router = express.Router();
const auth = require('../config/auth');

const chatController = require('../controllers/chat');

router.post('/:userId/chat/create',/* auth,*/ chatController.createChat);

router.post('/:userId/:chatId', /*auth,*/ chatController.sendMessage);

router.get('/:userId/chats',/* auth,*/ chatController.getAllChats);

router.get('/:userId/contacts',/* auth,*/ chatController.getAllContacts);

module.exports = router;