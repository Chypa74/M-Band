const mongoose = require('mongoose');
const CommentSchema = require('./CommentSchema');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  content: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [CommentSchema]
});

module.exports = PostSchema;
