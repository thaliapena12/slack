const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessionToken: {
        type: String
    },
    channels: [{ type: Schema.Types.ObjectId, ref: 'Channel' }], 
    dmgroups: [{ type: Schema.Types.ObjectId, ref: 'Dmgroup' }],
}, { timestamps: true })

module.exports = User = mongoose.model('User', UserSchema);