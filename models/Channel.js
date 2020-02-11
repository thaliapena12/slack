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
      required: true
    },
    channelMembers: {
        type: Array
    },
    channelMessages: {
        type: Array
    }
}, { timestamps: true })

module.exports = Channel = mongoose.model('Channel', ChannelSchema);