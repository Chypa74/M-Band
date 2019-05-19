const mongoose = require('mongoose');
const MessageSchema = require('../schemas/MessageSchema');

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
