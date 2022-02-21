const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        type: String,
        required:true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    seen: {
        type: Boolean,
        default: false
    }
})

const ChatSchema = new Schema({
    messages: [MessageSchema],
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('Chat', ChatSchema);