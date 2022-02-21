const User = require('../models/user');
const Chat = require('../models/chat');


//POST create a chat with a user or group
exports.createChat = async (req, res, next) => {
    const user_id = req.params.userId;
    const contact_id = req.body.contact_id;
    const partcpts = [user_id, contact_id];
    const c_id = (user_id + contact_id);
  
    const currentUser = await User.findById(user_id);
    const otherUser = await User.findById(contact_id);
    
    Chat.findOne({participants: partcpts}).then(chatDoc => {
        if(!chatDoc){
          const chat = new Chat({
              message: new Array(),
              participants: partcpts,
          });
          return chat.save().then(newChatDoc => {
              currentUser.chats.push(newChatDoc._id);
              otherUser.chats.push(newChatDoc._id);
              currentUser.save();
              otherUser.save();
              res.status(201).json({
                  message: 'Chat successfully created',
                  chat: newChatDoc, 
              })
          })
        }else{
            res.status(409).json({
                message: 'Chat Already exists',
                chat: chatDoc,
            })
        }
    }).catch(err=>{
        throw err;
    })
  };


  exports.sendMessage = (req, res, next)=>{
      const user_id = req.params.userId;
      const chat_id = req.params.chatId;
      const msg = req.body.message;

      Chat.findById(chat_id).then(chatDoc => {
        if(!chatDoc){
            res.status(404).json({
                message: 'chat does not exist',
            });
        }
        const saveMsg = {
            message: msg,
            time: Date.now(),
            status: 'sent',
            sentBy: user_id,
        }
        chatDoc.messages.push(saveMsg);
        return chatDoc.save().then(chat => {
            res.status(201).json({
                message: 'Message Successfully sent',
                chat: chat
            })
        }).catch(err => {
            throw err;
        })
      }).catch(err=>{
          throw err;
      })
  }
  