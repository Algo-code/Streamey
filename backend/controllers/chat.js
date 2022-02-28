const User = require("../models/user");
const Chat = require("../models/chat");

const async = require("async");

//POST create a chat with a user or group
exports.createChat = async (req, res, next) => {
  const user_id = req.params.userId;
  const contact_id = req.body.contact_id;
  const partcpts = [user_id, contact_id];
  const c_id = user_id + contact_id;

  const currentUser = await User.findById(user_id);
  const otherUser = await User.findById(contact_id);

  Chat.findOne({ participants: partcpts })
    .then((chatDoc) => {
      if (!chatDoc) {
        const chat = new Chat({
          message: new Array(),
          participants: partcpts,
        });
        return chat.save().then((newChatDoc) => {
          currentUser.chats.push(newChatDoc._id);
          otherUser.chats.push(newChatDoc._id);
          currentUser.save();
          otherUser.save();
          res.status(201).json({
            message: "Chat successfully created",
            chat: newChatDoc,
          });
        });
      } else {
        res.status(409).json({
          message: "Chat Already exists",
          chat: chatDoc,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

exports.sendMessage = (req, res, next) => {
  const user_id = req.params.userId;
  const chat_id = req.params.chatId;
  const msg = req.body.message;

  User.findById(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User does not exist",
        });
      }
      if (!user.chats.includes(chat_id)) {
        return res.status(403).json({
          message: "Action Unauthorised",
        });
      }

      Chat.findById(chat_id)
        .then((chatDoc) => {
          if (!chatDoc) {
            return res.status(404).json({
              message: "chat does not exist",
            });
          }
          const saveMsg = {
            message: msg,
            time: Date.now(),
            status: "sent",
            sentBy: user_id,
          };
          chatDoc.messages.push(saveMsg);
          return chatDoc
            .save()
            .then((chat) => {
              return res.status(201).json({
                message: "Message Successfully sent",
                chat: chat,
              });
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      throw err;
    });
};

exports.getChat = (req, res, next) => {
  const chat_id = req.params.chatId;
  const user_id = req.params.userId;

  User.findById(user_id)
    .then((userDoc) => {
      if (!userDoc) {
        return res.status(404).json({
          message: "User Not Found",
        });
      }

      if (!userDoc.chats.includes(chat_id)) {
        return res.status(403).json({
          message: "Action Unauthorized",
        });
      }
      Chat.findById(chat_id)
        .then((chatDoc) => {
          if (!chatDoc) {
            return res.status(404).json({
              message: "Chat was not found",
            });
          }
          if (!userDoc.chats.includes(chatDoc._id)) {
            return res.status(403).json({
              message: "Action Unathorized",
            });
          }
          return res.status(200).json({
            message: "Action Successful",
            chat: chatDoc,
          });
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      throw err;
    });
};

exports.getAllChats = (req, res, next) => {
  const user_id = req.params.userId;

  async.parallel(
    {
      currentUser: function (callback) {
        User.findById(user_id)
          .select("_id")
          .populate({
            path: "chats",
            options: {
              sort: { updatedAt: "-1" },
            },
          })
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Something Went Wrong",
          err: err,
        });
      }
      return res.status(200).json({
        message: "Action Successful",
        chats: results.currentUser.chats,
      });
    }
  );
};

exports.getAllContacts = (req, res, next) => {
  const user_id = req.params.userId;

  async.parallel(
    {
      currentUser: function (callback) {
        User.findById(user_id)
          .select("_id")
          .populate({
            path: "contacts",
            select: "username profileImageUrl email",
            options: {
              sort: { username: "1" },
            },
          })
          .exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Something Went Wrong",
          err: err,
        });
      }
      return res.status(200).json({
        message: "Action Successful",
        contacts: results.currentUser.contacts,
      });
    }
  );
};
