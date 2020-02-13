const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DmgroupsSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dmMembers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    dmMessages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {timestamps: true})

module.exports = mongoose.model('Dmgroup', DmgroupsSchema);