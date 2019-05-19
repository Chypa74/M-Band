const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  isItSent: Boolean,
  user_id: String,
  user_name: String,
  text: String,
  date: Date
});

module.exports = MessageSchema;
