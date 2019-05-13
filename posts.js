const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network'
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
  post_id: Number,
  user_id: Number,
  user_name: String,
  tags: [String],
  content: String,
  likes: [{ user_id: String, user_name: String }],
  comments: [{ user_id: String, user_name: String, content: String }]
});

const Post = mongoose.model('post', postSchema);

const Post1 = new Post({
  post_id: 1,
  user_id: 1,
  user_name: 'John Doe',
  tags: ['music', 'composition', 'hobby'],
  content:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  likes: [
    { user_id: 1, user_name: 'John Doe' },
    { user_id: 2, user_name: 'Michael' }
  ],
  comments: [
    { user_id: 1, user_name: 'John Doe', content: 'Some quick example' },
    { user_id: 2, user_name: 'Michael', content: 'Some example' }
  ]
});

Post1.save(function(err, q) {
  console.log('Saved ----');
  console.log(q);
});
