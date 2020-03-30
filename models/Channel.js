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

ChannelSchema.methods.addUser = function (userId) {
    this.channelMembers.push(userId);
    this.save();

    User.findById(userId).then(user => {
        user.channels.push(this.id);
        user.save(); 
    });
       
}

ChannelSchema.methods.addMessage = function (messageId) {
    this.channelMessages.push(messageId);
    this.save();
}

module.exports = Channel = mongoose.model('Channel', ChannelSchema);