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
    status: {
        type: String,
        default: 'sent'
    },
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const ChatSchema = new Schema({
    messages: [MessageSchema],
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},{timestamps: true})

module.exports = mongoose.model('Chat', ChatSchema);