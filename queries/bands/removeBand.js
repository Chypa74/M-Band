const mongoose = require('mongoose');
const argv = require('yargs-parser')(process.argv.slice(2));
const PostModel = require('../../models/PostModel');

mongoose.connect('mongodb+srv://Admin:Admin@cluster0-lvxbg.mongodb.net/test', {
  useNewUrlParser: true,
  dbName: 'social_network',
  autoIndex: false
});

const { band_id } = argv;

PostModel.deleteOne({ _id: band_id }, function(err) {
  if (err) {
    return console.log(error);
  }
  mongoose.disconnect();
});
