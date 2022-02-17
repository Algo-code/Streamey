import { Mongoose, Schema } from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    profileImageUrl: {
        type: String,
        default: '/files/images'
    },
    chats: {
        type: Schema.Types.ObjectId,
        ref: 'Chats'
    }
}, {timestamps: true});

module.exports = Mongoose.model('User', UserSchema);