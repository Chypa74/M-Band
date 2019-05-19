const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_name: String,
  type: String,
  group: Object,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  _email: String,
  _password: String
});

module.exports = UserSchema;
