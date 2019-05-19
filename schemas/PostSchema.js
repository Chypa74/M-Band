const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  content: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = PostSchema;
