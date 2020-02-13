const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DmgroupsSchema = new Schema({
    dmMembers: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    dmMessages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {timestamps: true})

DmgroupsSchema.methods.addMessage = function (messageId) {
    this.dmMessages.push(messageId);
    this.save();
}

module.exports = mongoose.model('Dmgroup', DmgroupsSchema);