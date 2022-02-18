const User = require('../models/user');
const bcrypt = require('bcrypt');

require('dotenv').config()
const {check, body, validationResult} = require('express-validator');

exports.registerUser = [
    check('username').trim().isLength({min:3}).escape(),
    check('email').trim().isEmail().escape(),
    check('password').isLength({min:6}).escape(),
    (req, res, next) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                message:'Validation Failed, Submitted Data is incorrect'
            })
            // const err = new Error('Validation Failed, Submitted Data is Incorrect');
            // err.statusCode = 422;
            // throw err;
        }

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password

        User.findOne({email: email}).then(async userDoc => {
            if(!userDoc){
                try {
                    return bcrypt
            .hash(password, 12)
            .then((hashedPassword) => {
              const user = new User({
                name: username,
                email: email,
                password: hashedPassword,
              });
              return user.save();
            })
            .then((user) => {
              res.status(201).json({
                  message: "Signup Successful",
                  user: user
              });
            });
                } catch (err) {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                }
            }else{
                return res.status(409).json({
                    message: 'User Already Exists'
                });
                // const err = new Error('User Already Exists');
                // err.statusCode = 409
                // throw err;
            }
        }).catch((err) => {
            console.log(err);
          });

}]