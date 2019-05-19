const mongoose = require('mongoose');
const CommentSchema = require('../schemas/CommentSchema');

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
