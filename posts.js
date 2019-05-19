const mongoose = require('mongoose');
const PostModel = require('./models/PostModel');
const UserModel = require('./models/UserModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

UserModel.findOne({ _id: '5ce18e00ca9fd9c8775a6d39' }, function(err, user) {
  const userId = user._id;
  console.log(userId);

  const post = new PostModel({
    user_id: userId,
    tags: ['music', 'composition', 'hobby'],
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
