const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const PostModel = require('../../models/PostModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { tag } = argv;

PostModel.find({ tags: tag }, function(err, posts) {
  if (err) {
    return console.log(error);
  }
  console.log(posts);
  mongoose.disconnect();
});
