const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
                  id: user._id
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

}];

exports.loginUser = [
    check('email').trim().isEmail().escape(),
    check('password').escape(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(409).json({
                message: 'Validation Failed, Check your input',
                errors: errors.array()
            });
        }else{
            const email = req.body.email;
            const password = req.body.password;
            
            try {
                const user = await User.findOne({email});

                if(!user){
                    return res.status(404).json({
                        message: 'User Does Not Exist! Check your email address',
                    })
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch){
                    return res.status(400).json({
                        message:'Incorrect email password!'
                    });
                }
                const payload = {
                    user: {
                        id: user._id
                    }
                };

                jwt.sign(payload, process.env.JWT_SECRET,
                    {
                        expiresIn: 3600
                    },
                    (err, token) => {
                        if(err)
                            throw err;
                        res.status(200).json({
                            token
                        });
                    }
                );

            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Server Error"
                })
            }
        }
    }
]

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            message: 'request successful',
            user: user
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error in fetching user',
            error: error.array(),
        })
    }
}