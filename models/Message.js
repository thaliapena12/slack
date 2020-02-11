const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  text: {
    type: Schema.Types.String,
    required: true,
  },
  user: {
    type: Schema.Types.String,
    required: true,
  },
  channel: {
    type: Schema.Types.String,
    required: true,
  },
}, { timestamps: true })


module.exports = mongoose.model('Message', MessageSchema)