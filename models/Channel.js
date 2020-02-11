const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    accessType: {
        type: String,
        required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    channelMembers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    channelMessages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, { timestamps: true })

module.exports = Channel = mongoose.model('Channel', ChannelSchema);