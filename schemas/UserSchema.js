const mongoose = require('mongoose');
const MessageSchema = require('./MessageSchema');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: String,
  type: String,
  group: Object,
  messages: [MessageSchema],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  _email: String,
  _password: String
});

module.exports = UserSchema;
