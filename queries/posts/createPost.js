const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const PostModel = require('../../models/PostModel');
const UserModel = require('../../models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

let { author_id, tags, content } = argv;

UserModel.findOne({ _id: author_id }, function(err, user) {
  if (err) {
    return console.log(error);
  }
  const userId = user._id;

  if (tags) {
    tags = tags.split(',').map(value => value.trim());
  }

  const post = new PostModel({
    user_id: userId,
    tags: tags,
    content: content,
    likes: [],
    comments: []
  });

  post.save(function(err, q) {
    console.log('Saved ----');
    console.log(q);

    mongoose.disconnect(); // отключение от базы данных

    if (err) return console.log(err);

    console.log('Сохранен объект', user);
  });
});
