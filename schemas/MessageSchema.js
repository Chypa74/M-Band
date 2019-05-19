const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  isItSent: Boolean,
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  date: Date
});

module.exports = MessageSchema;
