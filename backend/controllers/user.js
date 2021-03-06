const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();
const { check, body, validationResult, Result } = require('express-validator');

//POST register user account
exports.registerUser = [
  check('username').trim().isLength({ min: 3 }).not().isEmpty().escape(),
  check('email').trim().isEmail().escape(),
  check('password').isLength({ min: 6 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message: 'Validation Failed, Submitted Data is incorrect',
      });
      // const err = new Error('Validation Failed, Submitted Data is Incorrect');
      // err.statusCode = 422;
      // throw err;
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
      .then(async (userDoc) => {
        if (!userDoc) {
          User.findOne({ username: username }).then(async (user) => {
            if (!user) {
              try {
                return bcrypt
                  .hash(password, 12)
                  .then((hashedPassword) => {
                    const user = new User({
                      username: username,
                      email: email,
                      password: hashedPassword,
                    });
                    return user.save();
                  })
                  .catch((err) => {
                    throw err;
                  })
                  .then((user) => {
                    res.status(201).json({
                      message: 'Signup Successful',
                      id: user._id,
                      user, ///to fix
                    });
                  });
              } catch (err) {
                if (!err.statusCode) {
                  err.statusCode = 500;
                }
              }
            } else {
              return res.status(409).json({
                message: 'Username Already exists! Pick a new Username',
              });
            }
          });
        } else {
          return res.status(409).json({
            message: 'Account Already Exists',
          });
          // const err = new Error('User Already Exists');
          // err.statusCode = 409
          // throw err;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
];

//POST sign in a user
exports.loginUser = [
  check('username').trim().isEmail().escape(),
  check('password').escape(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const username = req.body.username;
      const password = req.body.password;

      try {
        const user = await User.findOne({ username: username });

        if (!user) {
          return res.status(404).json({
            message:
              'User Does Not Exist! Check your username or email address',
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({
            message: 'Incorrect username or password!',
          });
        }
        const payload = {
          user: {
            id: user._id,
          },
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
               "token":token,
              "userID": user._id
             });
          }
        );
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Server Error',
        });
      }
    } else {
      const username = req.body.username;
      const password = req.body.password;

      try {
        const user = await User.findOne({ email: username });

        if (!user) {
          return res.status(404).json({
            message:
              'User Does Not Exist! Check your username or email address',
          });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({
            message: 'Incorrect email or password!',
          });
        }
        const payload = {
          user: {
            id: user._id,
          },
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
 
              "token":token,
              "userID": user._id
 
            });
          }
        );
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Server Error',
        });
      }
    }
  },
];

//GET return current user profile
exports.getUser = (req, res, next) => {
  try {
 
    User.findById(mongoose.Types.ObjectId(req.params.userId), { password: 0, chats:0, contacts: 0, }).then(user => {
      if(user != null){
        res.status(200).json({
          message: "request successful",
          user: user,
        });
        console.log('USERID: '+req.params.userId);
        console.log('REQ: '+req);
      } else{
        console.log('USERID: '+req.params.userId);
        res.status(401).json({
          message: "Bad Request"
          
        })
      }
 
    });
    
  } catch (error) {
    console.log('REQ2: '+req);
    console.log(error);
    res.status(400).json({
      message: 'Error in fetching user',
      error: error.array(),
    });
  }
};

//POST add user to contact list
exports.addContact = (req, res, next) => {
  const contact_id = req.body.contact_id;
  const user_id = req.params.userId;

  User.findById(user_id)
    .then((user) => {
      if (user.contacts.includes(contact_id)) {
        return res.status(409).json({
          message: 'Contact already exists',
          contacts: user.contacts,
        });
      }
      user.contacts.push(contact_id);
      return user.save(function (err) {
        if (err) return next(err);
        res.status(201).json({
          message: 'Contacted was successfully added to your list',
          contacts: user.contacts,
        });
      });
    })
    .catch((err) => {
      throw err;
    });
};

//GET request to fetch a contact
exports.getContact = (req, res, next) => {
  const user_id = req.params.userId;
  const contact_id = req.params.contactId;
  console.log(contact_id);
  User.findById(user_id).then((userDoc) => {
    if (!userDoc) {
      return res.status(404).json({
        message: 'User Not Found',
      });
    }

    if (userDoc.contacts.includes(contact_id)) {
      User.findById(contact_id)
        .select('_id username email profileImageUrl')
        .then((contactDoc) => {
          return res.status(200).json({
            message: 'Successful',
            contact: contactDoc,
          });
        });
    }

    if (!userDoc.contacts.includes(contact_id)) {
      return res.status(404).json({
        message: 'Contact Not Found',
      });
    }
    return res.status(500).json({
      message: 'Something Went Wrong',
    });
  });
};
