const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  text: {
    type: Schema.Types.String,
    required: true,
  },
  authorBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: 'Channel'
  },
  dmgroup: {
    type: Schema.Types.ObjectId,
    ref: 'Dmgroup'
  }
}, { timestamps: true })


module.exports = mongoose.model('Message', MessageSchema);