const  mongoose = require('mongoose');

const Schema = mongoose.Schema


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    profileImageUrl: {
        type: String,
        default: '/files/images'
    },
    chats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);